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
    public class EkstrakteController : ControllerBase
    {
        private readonly IGeneralRepository _repository;
        private readonly IConfiguration _configuration;
        private readonly IHelper _helper;
        private readonly ILogger _logger;
        public EkstrakteController(IGeneralRepository repository, IConfiguration configuration, IHelper helper, ILogger<EkstrakteController> logger)
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
        /// Merr ditet
        /// </summary>
        [HttpGet("ditet")]
        [Produces("application/json", Type = typeof(List<string>))]
        public IActionResult GetDitet()
        {
            try
            {
                var ditet = _repository.GetDitet();
                return Ok(ditet);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return StatusCode(500, "Internal server error");
            }
        }


        /// <summary>
        /// Merr Sallat
        /// </summary>
        [HttpGet("salla")]
        [Produces("application/json", Type = typeof(List<string>))]
        public IActionResult GetSalla()
        {
            try
            {
                var sallat = _repository.GetKlasa();
                return Ok(sallat);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return StatusCode(500, "Internal server error");
            }
        }

        /// <summary>
        /// Merr Orarin per salle dhe dite
        /// </summary>
        [HttpGet("{salla}/{ditet}/orari")]
        [Produces("application/json", Type = typeof(List<string>))]
        public IActionResult GetOrari(int salla, int ditet)
        {
            try
            {
                var orari = _repository.GetOrariDateKlaseDtos(salla, ditet);
                return Ok(orari);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return StatusCode(500, "Internal server error");
            }
        }
    }
}