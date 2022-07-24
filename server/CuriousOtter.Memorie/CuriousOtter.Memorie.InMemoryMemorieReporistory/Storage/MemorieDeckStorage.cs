using CuriousOtter.Memorie.Domain.Models;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CuriousOtter.Memorie.InMemoryMemorieReporistory.Storage
{
    public class MemorieDeckStorage : IMemorieDeckStorage
    {
        private ICollection<MemorieDeck> memorieDecks;

        public MemorieDeckStorage(ICollection<MemorieDeck> initialMemorieDecks)
        {
            this.memorieDecks = initialMemorieDecks;
        }

        public IQueryable<MemorieDeck> GetMemorieCards()
        {
            return memorieDecks.AsQueryable();
        }
    }
}
