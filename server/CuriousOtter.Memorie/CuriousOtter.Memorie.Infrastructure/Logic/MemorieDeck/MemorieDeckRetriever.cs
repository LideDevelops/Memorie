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
        public Task<Domain.Models.MemorieDeck> GetMemorieDeckAsync(int id)
        {
            throw new NotImplementedException();
        }

        public IQueryable<Domain.Models.MemorieDeck> GetMemorieDeckAsyncs()
        {
            throw new NotImplementedException();
        }
    }
}
