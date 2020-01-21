using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Contracts;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CoreWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PedagogController : ControllerBase
    {
        private readonly IGeneralRepository _repository;
        public PedagogController(IGeneralRepository repository)
        {
            _repository = repository;
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
                return StatusCode(500, "Internal server error");
            }
        }
    }
}