using CuriousOtter.Memorie.Infrastructure.Logic.MemorieDeck;
using CuriousOtter.Memorie.Infrastructure.Ports.Memorie;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CuriousOtter.Memorie.Infrastructure.Setup
{
    public static class ServiceCollectionExtension
    {
        public static IServiceCollection AddInfrastructureProject(this IServiceCollection services)
        {
            services.AddTransient<IMemorieDeckRetriever, MemorieDeckRetriever>();
            return services;
        }
    }
}
