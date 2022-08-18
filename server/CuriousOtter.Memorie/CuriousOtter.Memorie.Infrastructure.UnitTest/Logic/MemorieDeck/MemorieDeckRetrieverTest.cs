using CuriousOtter.Memorie.Domain.Models;
using CuriousOtter.Memorie.Infrastructure.Logic.MemorieDeck;
using CuriousOtter.Memorie.Infrastructure.Ports.Memorie;
using NSubstitute;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CuriousOtter.Memorie.Infrastructure.UnitTest.Logic
{
    [TestFixture]
    public class MemorieDeckRetrieverTest
    {
        private readonly IMemorieDeckRetrieverRepository memorieDeckRetrieverRepository = Substitute.For<IMemorieDeckRetrieverRepository>();
        private IMemorieDeckRetriever testee;

        [SetUp]
        public void SetUp()
        {
            testee = new MemorieDeckRetriever(memorieDeckRetrieverRepository);
        }

        [Test]
        public async Task GetMemorieDeckAsync_Test_Success()
        {
            var mockedDeck = new MemorieDeck(1, "Test");
            memorieDeckRetrieverRepository.GetMemorieDeckAsync(1).Returns(Task.FromResult(mockedDeck));
            var result = await testee.GetMemorieDeckAsync(1);
            Assert.IsNotNull(result);
            Assert.AreEqual(1, result.Identidfier);
        }

        [Test]
        public async Task GetMemorieDeckAsync_Test_IdNotFound()
        {
            var result = await testee.GetMemorieDeckAsync(1);
            Assert.IsNull(result);
        }

        [Test]
        public void GetMemorieDecks_test()
        {
            var decks = new List<MemorieDeck>()
            {
                new MemorieDeck(1, "Test"),
                new MemorieDeck(2, "Test")
            }.AsQueryable();
            memorieDeckRetrieverRepository.GetMemorieDecks().Returns(decks);

            var result = testee.GetMemorieDecks();
            Assert.IsNotNull(result);
            Assert.IsNotEmpty(result);
        }
    }
}
