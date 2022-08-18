using CuriousOtter.Memorie.Domain.Dto;
using CuriousOtter.Memorie.Domain.Models;
using CuriousOtter.Memorie.GameAPI.Controllers;
using Microsoft.AspNetCore.Mvc;
using NSubstitute;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CuriousOtter.Memorie.GameAPI.Tests.Controller
{
    [TestFixture]
    public class MemorieDeckControllerTest
    {
        private readonly Microsoft.Extensions.Logging.ILogger<MemorieDeckController> logger = Substitute.For<Microsoft.Extensions.Logging.ILogger<MemorieDeckController>>();
        private readonly Infrastructure.Ports.Memorie.IMemorieDeckRetriever memorieDeckRetriever = Substitute.For<Infrastructure.Ports.Memorie.IMemorieDeckRetriever>();
        private MemorieDeckController testee;

        [SetUp]
        public void SetUp()
        {
            testee = new MemorieDeckController(logger, memorieDeckRetriever);
        }

        [Test]
        public void GetAllDecks()
        {
            var decks = new List<MemorieDeck>()
            {
                new MemorieDeck(1, "Test"),
                new MemorieDeck(2, "Test")
            }.AsQueryable();
            memorieDeckRetriever.GetMemorieDecks().Returns(decks);
            var result = testee.Get();
            Assert.NotNull(result);
            Assert.IsInstanceOf<OkObjectResult>(result);
            var castedResult = result as OkObjectResult;
            Assert.IsInstanceOf<IQueryable<MemorieDeck>>(castedResult.Value);
            var castedResultList = castedResult.Value as IQueryable<MemorieDeck>;
            Assert.IsNotEmpty(castedResultList);
            Assert.AreEqual(2, castedResultList.Count());
        }

        [Test]
        public void GetAllDecksMetaData()
        {
            var decks = new List<MemorieDeck>()
            {
                new MemorieDeck(1, "Test"),
                new MemorieDeck(2, "Test")
            }.AsQueryable();
            memorieDeckRetriever.GetMemorieDecks().Returns(decks);
            var result = testee.GetMetaData();
            Assert.NotNull(result);
            Assert.IsInstanceOf<OkObjectResult>(result);
            var castedResult = result as OkObjectResult;
            Assert.IsInstanceOf<IQueryable<MemorieDeckMetaData>>(castedResult.Value);
            var castedResultList = castedResult.Value as IQueryable<MemorieDeckMetaData>;
            Assert.IsNotEmpty(castedResultList);
            Assert.AreEqual(2, castedResultList.Count());
        }

        [Test]
        public async Task GetDeckAsync_FoundTest()
        {
            var deck = new MemorieDeck(1, "test");
            memorieDeckRetriever.GetMemorieDeckAsync(Arg.Is<int>(1)).Returns(deck);
            var result = await testee.Get(1);
            Assert.NotNull(result);
            Assert.IsInstanceOf<OkObjectResult>(result);
            var castedResult = result as OkObjectResult;
            Assert.IsInstanceOf<MemorieDeck>(castedResult.Value);
            var castedValue = castedResult.Value as MemorieDeck;
            Assert.AreEqual(1, castedValue.Identidfier);
        }

        [Test]
        public async Task GetDeckAsync_NotFoundTest()
        {
            var deck = new NotADeckMemorieDeck();
            memorieDeckRetriever.GetMemorieDeckAsync(Arg.Is<int>(1)).Returns(deck);
            var result = await testee.Get(1);
            Assert.NotNull(result);
            Assert.IsInstanceOf<NotFoundObjectResult>(result);
            var castedResult = result as NotFoundObjectResult;
            Assert.IsInstanceOf<NotADeckMemorieDeck>(castedResult.Value);
            var castedValue = castedResult.Value as NotADeckMemorieDeck;
            Assert.AreEqual(-1, castedValue.Identidfier);
        }
    }
}
