using Contracts;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;

namespace CoreWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PedagogController : ControllerBase
    {
        private readonly IGeneralRepository _repository;
        private readonly IConfiguration _configuration;
        private readonly IHelper _helper;
        private readonly ILogger _logger;
        public PedagogController(IGeneralRepository repository, IConfiguration configuration, IHelper helper, ILogger<PedagogController> logger)
        {
            _repository = repository;
            _configuration = configuration;
            _helper = helper;
            _logger = logger;
            if (!_repository.isSetConnectionString())
            {
                var dbType = _helper.GetDbType(configuration.GetSection("DatabaseType").Value);
                if (dbType == Contracts.Utils.enums.DbTypes.NotSupported)
                    _logger.LogError($"Database {configuration.GetSection("DatabaseType").Value} isn't supported");
                else
                    _repository.SetConnectionString(configuration.GetConnectionString("DefaultConnection"), dbType);
            }
        }

        /// <summary>
        /// Merr gjithe emrat nga db
        /// </summary>
        [HttpGet]
        [Produces("application/json", Type = typeof(List<string>))]
        public IActionResult GetPedagogNames()
        {
            try
            {
                var pedagog = _repository.GetPedagog();
                return Ok(pedagog);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return StatusCode(500, "Internal server error");
            }
        }

        /// <summary>
        /// Merr orarin per pedagog
        /// </summary>
        [HttpGet("{name}/orari")]
        [Produces("application/json", Type = typeof(List<string>))]
        public IActionResult GetPedagogOrari(string name)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(name))
                    return BadRequest();

                var pedagog = _repository.GetOrarPedagog(name);
                return Ok(pedagog);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return StatusCode(500, "Internal server error");
            }
        }
    }
}