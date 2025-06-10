using System.Diagnostics;
using Anglican_Church_Australia.Models;
using Microsoft.AspNetCore.Mvc;

namespace Anglican_Church_Australia.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            Banner banner = new Banner();
            banner.Id = 1;
            banner.VideoUrl = string.Format("mp/Christ-Church-St-Laurence-Banner.mp4");
            banner.ParishName = "Christ Church St Laurence";
            banner.LogoUrl = string.Format("img/banner_logo_white.png");

            return View(banner);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
