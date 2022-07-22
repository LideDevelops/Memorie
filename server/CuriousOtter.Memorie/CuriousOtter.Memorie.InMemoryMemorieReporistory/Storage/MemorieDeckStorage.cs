using CuriousOtter.Memorie.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CuriousOtter.Memorie.InMemoryMemorieReporistory.Storage
{
    public class MemorieDeckStorage
    {
        private ICollection<MemorieDeck> memorieDecks;

        public MemorieDeckStorage()
        {
            this.memorieDecks = new List<MemorieDeck>();
        }


    }
}
