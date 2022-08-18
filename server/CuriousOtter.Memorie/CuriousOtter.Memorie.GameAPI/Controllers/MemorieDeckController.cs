using CuriousOtter.Memorie.Domain.Dto;
using CuriousOtter.Memorie.Domain.Models;
using CuriousOtter.Memorie.Infrastructure.Ports.Memorie;
using Microsoft.AspNetCore.Mvc;

namespace CuriousOtter.Memorie.GameAPI.Controllers
{
    [ApiController]
    [Route("MemorieDecks")]
    public class MemorieDeckController : ControllerBase
    {
        private readonly ILogger<MemorieDeckController> _logger;
        private readonly IMemorieDeckRetriever memorieDeckRetriever;

        public MemorieDeckController(ILogger<MemorieDeckController> logger, IMemorieDeckRetriever memorieDeckRetriever)
        {
            _logger = logger;
            this.memorieDeckRetriever = memorieDeckRetriever;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(memorieDeckRetriever.GetMemorieDecks());
        }

        [HttpGet("metadata")]
        public IActionResult GetMetaData()
        {
            var metaData = memorieDeckRetriever
                            .GetMemorieDecks()
                            .Select(deck => new MemorieDeckMetaData(deck));
            return Ok(metaData);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get([FromRoute] int id)
        {
            var card = await memorieDeckRetriever.GetMemorieDeckAsync(id);
            if(card.GetType().Equals(typeof(NotADeckMemorieDeck)))
            {
                return NotFound(card);
            }
            return Ok(card);
        }
    }
}