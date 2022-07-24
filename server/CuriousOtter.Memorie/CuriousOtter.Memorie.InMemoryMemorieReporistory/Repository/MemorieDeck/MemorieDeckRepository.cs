using CuriousOtter.Memorie.Domain.Models;
using CuriousOtter.Memorie.Infrastructure.Ports.Memorie;
using CuriousOtter.Memorie.InMemoryMemorieReporistory.Storage;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CuriousOtter.Memorie.InMemoryMemorieReporistory.Repository.MemorieDeck
{
    public class MemorieDeckRepository : IMemorieDeckRetrieverRepository
    {
        private readonly IMemorieDeckStorage memorieDeckStorage;

        public MemorieDeckRepository(IMemorieDeckStorage memorieDeckStorage)
        {
            this.memorieDeckStorage = memorieDeckStorage;
        }

        public Task<Domain.Models.MemorieDeck> GetMemorieDeckAsync(int id)
        {
            return Task.FromResult(memorieDeckStorage.GetMemorieCards().Where(x => x.Identidfier == id).FirstOrDefault(new NotADeckMemorieDeck()));
        }

        public IQueryable<Domain.Models.MemorieDeck> GetMemorieDecks()
        {
            return memorieDeckStorage.GetMemorieCards();
        }
    }
}
