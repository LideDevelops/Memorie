using CuriousOtter.Memorie.Infrastructure.Ports.Memorie;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CuriousOtter.Memorie.Infrastructure.Logic.MemorieDeck
{
    public class MemorieDeckRetriever : IMemorieDeckRetriever
    {
        private readonly IMemorieDeckRetrieverRepository memorieDeckRetrieverRepository;

        public MemorieDeckRetriever(IMemorieDeckRetrieverRepository memorieDeckRetrieverRepository)
        {
            this.memorieDeckRetrieverRepository = memorieDeckRetrieverRepository;
        }

        public async Task<Domain.Models.MemorieDeck> GetMemorieDeckAsync(int id)
        {
            return await memorieDeckRetrieverRepository.GetMemorieDeckAsync(id);
        }

        public IQueryable<Domain.Models.MemorieDeck> GetMemorieDecks()
        {
            return memorieDeckRetrieverRepository.GetMemorieDecks();
        }
    }
}
