using CuriousOtter.Memorie.Infrastructure.Logic.MemorieDeck;
using CuriousOtter.Memorie.Infrastructure.Ports.Memorie;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CuriousOtter.Memorie.Infrastructure.UnitTest.Logic.MemorieDeck
{
    [TestFixture]
    public class MemorieDeckRetrieverTest
    {
        private IMemorieDeckRetriever testee;

        [SetUp]
        public void SetUp()
        {
            testee = new MemorieDeckRetriever();
        }

        [Test]
        public async Task GetMemorieDeckAsync_Test_Success()
        {
            var result = await testee.GetMemorieDeckAsync(1);
            Assert.IsNotNull(result);
            Assert.AreEqual(1, result.Identidfier);
        }
    }
}
