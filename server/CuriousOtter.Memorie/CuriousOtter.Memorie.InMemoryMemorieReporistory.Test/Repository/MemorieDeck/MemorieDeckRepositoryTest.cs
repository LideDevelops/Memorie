using CuriousOtter.Memorie.Domain.Models;
using CuriousOtter.Memorie.InMemoryMemorieReporistory.Repository.MemorieDeck;
using CuriousOtter.Memorie.InMemoryMemorieReporistory.Storage;
using Microsoft.Extensions.Logging;
using NSubstitute;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CuriousOtter.Memorie.InMemoryMemorieReporistory.Test.Repository
{
    [TestFixture]
    public class MemorieDeckRepositoryTest
    {
        private MemorieDeckRepository testee;
        private IMemorieDeckStorage memorieDeckStorage;


        [SetUp]
        public void SetUp()
        {
            memorieDeckStorage = Substitute.For<IMemorieDeckStorage>();
            testee = new MemorieDeckRepository(memorieDeckStorage);
        }

        [Test]
        public async Task GetMemorieDeckAsyncTest_Susccess()
        {
            var memCards = new List<MemorieDeck>()
            {
                new MemorieDeck(1)
                {
                    LastModified = DateTime.UtcNow,
                },
                new MemorieDeck(2)
                {
                    LastModified = DateTime.UtcNow,
                },

            }.AsQueryable();
            memorieDeckStorage.GetMemorieCards().Returns(memCards); 
            var result = await testee.GetMemorieDeckAsync(1);
            Assert.IsNotNull(result);
            Assert.AreEqual(1, result.Identidfier);
        }

        [Test]
        public async Task GetMemorieDeckAsyncTest_NotFound()
        {
            var memCards = new List<MemorieDeck>()
            {
                new MemorieDeck(3)
                {
                    LastModified = DateTime.UtcNow,
                },
                new MemorieDeck(2)
                {
                    LastModified = DateTime.UtcNow,
                },

            }.AsQueryable();
            memorieDeckStorage.GetMemorieCards().Returns(memCards);
            var result = await testee.GetMemorieDeckAsync(1);
            Assert.IsNotNull(result);
            Assert.IsInstanceOf<NotADeckMemorieDeck>(result);
            Assert.AreEqual(-1, result.Identidfier);
        }

        [Test]
        public void GetMemorieDeckAsyncs_GetListTest()
        {
            var memCards = new List<MemorieDeck>()
            {
                new MemorieDeck(1)
                {
                    LastModified = DateTime.UtcNow,
                },
                new MemorieDeck(2)
                {
                    LastModified = DateTime.UtcNow,
                },

            }.AsQueryable();
            memorieDeckStorage.GetMemorieCards().Returns(memCards);

            var result = testee.GetMemorieDecks();
            Assert.NotNull(result);
            Assert.IsNotEmpty(result);
        }

    }
}
