using CuriousOtter.Memorie.Domain.Models;

namespace CuriousOtter.Memorie.InMemoryMemorieReporistory.Storage
{
    public interface IMemorieDeckStorage
    {
        IQueryable<MemorieDeck> GetMemorieCards();
    }
}