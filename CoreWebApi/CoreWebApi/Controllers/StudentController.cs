﻿using Contracts;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;

namespace CoreWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly IGeneralRepository _repository;
        private readonly IConfiguration _configuration;
        private readonly IHelper _helper;
        private readonly ILogger _logger;
        public StudentController(IGeneralRepository repository, IConfiguration configuration, IHelper helper, ILogger<StudentController> logger)
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
        /// Merr gjithe deget
        /// </summary>
        [HttpGet("dege")]
        [Produces("application/json", Type = typeof(List<string>))]
        public IActionResult GetDege()
        {
            try
            {
                var dege = _repository.GetDeget();
                return Ok(dege);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return StatusCode(500, "Internal server error");
            }
        }

        /// <summary>
        /// Merr gjithe vitet per dege
        /// </summary>
        [HttpGet("{dege}/vit")]
        [Produces("application/json", Type = typeof(List<string>))]
        public IActionResult GetVit(string dege)
        {
            try
            {
                var vite = _repository.GetVitetPerDege(dege);
                return Ok(vite);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return StatusCode(500, "Internal server error");
            }
        }

        /// <summary>
        /// Merr gjithe paralelet per dege dhe vit
        /// </summary>
        [HttpGet("{dege}/{vit}/paraleli")]
        [Produces("application/json", Type = typeof(List<string>))]
        public IActionResult GetParaleli(string dege, int vit)
        {
            try
            {
                var paralele = _repository.GetParaleli(dege, vit);
                return Ok(paralele);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return StatusCode(500, "Internal server error");
            }
        }

        /// <summary>
        /// Merr gjithe orarin per dege, vit dhe paralel
        /// </summary>
        [HttpGet("{dege}/{vit}/{paraleli}/orari")]
        [Produces("application/json", Type = typeof(List<string>))]
        public IActionResult GetOrari(string dege, int vit, string paraleli)
        {
            try
            {
                var orar = _repository.GetOrariStudent(dege, vit, paraleli);
                return Ok(orar);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return StatusCode(500, "Internal server error");
            }
        }

    }
}