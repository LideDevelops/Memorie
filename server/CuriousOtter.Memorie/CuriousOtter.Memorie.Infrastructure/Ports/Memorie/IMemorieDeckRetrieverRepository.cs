using CuriousOtter.Memorie.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CuriousOtter.Memorie.Infrastructure.Ports.Memorie
{
    public interface IMemorieDeckRetrieverRepository
    {
        Task<MemorieDeck> GetMemorieDeckAsync(int id);
        IQueryable<MemorieDeck> GetMemorieDecks();
    }
}
