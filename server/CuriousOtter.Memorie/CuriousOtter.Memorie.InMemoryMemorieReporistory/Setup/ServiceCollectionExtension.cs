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
                    new MemorieDeck(1)
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
                    new MemorieDeck(2)
                    {
                        LastModified = DateTime.Now,
                        CardsWithoutDoubles = new MemorieCard[]
                        {
                            new MemorieCard(1)
                            {
                                LastModified = DateTime.Now,
                                Name = "Otter Card 1"
                            },
                            new MemorieCard(2)
                            {
                                LastModified = DateTime.Now,
                                Name = "Otter Card 2"
                            },
                            new MemorieCard(3)
                            {
                                LastModified = DateTime.Now,
                                Name = "Otter Card 3"
                            },
                        }
                    },
                    new MemorieDeck(3)
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
                };
                return new MemorieDeckStorage(initialMemorieDeckList);
            });
            services.AddTransient<IMemorieDeckRetrieverRepository, MemorieDeckRepository>();
            return services;
        }
    }
}
