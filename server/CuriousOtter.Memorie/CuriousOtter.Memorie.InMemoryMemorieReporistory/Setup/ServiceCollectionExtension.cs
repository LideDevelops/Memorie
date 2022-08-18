using CuriousOtter.Memorie.Domain.Models;
using CuriousOtter.Memorie.Infrastructure.Ports.Memorie;
using CuriousOtter.Memorie.InMemoryMemorieReporistory.Repository.MemorieDeck;
using CuriousOtter.Memorie.InMemoryMemorieReporistory.Storage;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CuriousOtter.Memorie.InMemoryMemorieReporistory.Setup
{
    public static class ServiceCollectionExtension
    {
        public static IServiceCollection AddInMemoryMemorieRepositroy(this IServiceCollection services)
        {
            services.AddSingleton<IMemorieDeckStorage, MemorieDeckStorage>(factory =>
            {
                var initialMemorieDeckList = new List<MemorieDeck>()
                {
                    new MemorieDeck(1, "Test")
                    {
                        LastModified = DateTime.Now,
                        CardsWithoutDoubles = new MemorieCard[]
                        {
                            new MemorieCard(1)
                            {
                                LastModified = DateTime.Now,
                                Name = "Test Card 1"
                            },
                            new MemorieCard(2)
                            {
                                LastModified = DateTime.Now,
                                Name = "Test Card 2"
                            },
                            new MemorieCard(3)
                            {
                                LastModified = DateTime.Now,
                                Name = "Test Card 3"
                            },
                        }
                    },
                    new MemorieDeck(2, "Otter")
                    {
                        LastModified = DateTime.Now,
                        CardsWithoutDoubles = GetMockedCards("Otter", 50)
                    },
                    new MemorieDeck(3, "Owl")
                    {
                        LastModified = DateTime.Now,
                        CardsWithoutDoubles = new MemorieCard[]
                        {
                            new MemorieCard(1)
                            {
                                LastModified = DateTime.Now,
                                Name = "Owl Card 1"
                            },
                            new MemorieCard(2)
                            {
                                LastModified = DateTime.Now,
                                Name = "Owl Card 2"
                            },
                            new MemorieCard(3)
                            {
                                LastModified = DateTime.Now,
                                Name = "Owl Card 3"
                            },
                        }
                    },
                    new MemorieDeck(4, "Tarot")
                    {
                        LastModified = DateTime.Now,
                        CardsWithoutDoubles = GetMockedCards("Tarot", 20)
                    },

                };
                return new MemorieDeckStorage(initialMemorieDeckList);
            });
            services.AddTransient<IMemorieDeckRetrieverRepository, MemorieDeckRepository>();
            return services;
        }

        private static ICollection<MemorieCard> GetMockedCards(string namePattern, int amount)
        {
            var cards = Enumerable.Range(0,amount).Select(i => new MemorieCard(i) { Name = namePattern + $" {i}"});
            return cards.ToList();
        }
    }
}
