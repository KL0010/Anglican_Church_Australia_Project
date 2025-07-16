using System.Diagnostics;
using Anglican_Church_Australia.Models;
using Microsoft.AspNetCore.Identity;
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
            int count = 0;
            Home_Index index = new Home_Index();
            index.Id = 1;
            index.VideoUrl = string.Format("mp/Christ-Church-St-Laurence-Banner.mp4");
            index.ParishName = "Christ Church St Laurence";
            index.LogoUrl = string.Format("img/banner_logo_white.png");
            index.LogoUrlThumb = string.Format("img/banner_logo_white_thumb.png");
            index.ScrollDownLogo = string.Format("img/scroll_down.gif");
            index.ScrollUpLogo = string.Format("img/scroll_up.gif");
            index.SecondTitle = "Services";
            index.SecondDescription = "Join us for vibrant and traditional Anglican services in the heart of Sydney CBD";
            index.Services = new List<Service>();
            Service service = new Service { Name = "Next Service", ImgUrl = "img/one.png" };
            index.Services.Add(service);
            service = new Service { Name = "Special Services", ImgUrl = "img/two.png" };
            index.Services.Add(service);
            service = new Service { Name = "Weekday Services", ImgUrl = "img/three.png" };
            index.Services.Add(service);

            index.SlideShow = new List<Slide>();

            Slide show = new Slide();
            show.Title = "Restoration";
            show.UrlPath = "img/slider/restoration.png";
            show.ScheduleDate = " ";
            show.ScheduleTime = " ";
            show.Index = count;
            index.SlideShow.Add(show);
            count++;
            show = new Slide();
            show.Title = "The National Braille Camp";
            show.UrlPath = "img/slider/evensong.png";
            show.ScheduleDate = "6/7/2025";
            show.ScheduleTime = "6:30 pm";
            show.Index = count;
            index.SlideShow.Add(show);
            count++;
            show = new Slide();
            show.Title = "Monteverdi Vespers";
            show.UrlPath = "img/slider/monteverdi.png";
            show.ScheduleDate = "6/8/2025";
            show.ScheduleTime = "7:00 pm";
            show.Index = count;
            index.SlideShow.Add(show);
            count++;
            show = new Slide();
            show.Title = "The Friday banquet";
            show.UrlPath = "img/slider/banquet.png";
            show.ScheduleDate = "4/7/2025";
            show.ScheduleTime = "12:00 pm";
            show.Index = count;
            index.SlideShow.Add(show);
            count++;
            show = new Slide();
            show.Title = "Oxford Movement Sunday";
            show.UrlPath = "img/slider/oxford.png";
            show.ScheduleDate = "13/7/2025";
            show.ScheduleTime = "6:30 pm";
            show.Index = count;
            index.SlideShow.Add(show);
            index.ForthTitle = "Discovery";
            index.Discoveries = new List<Discovery>();
            Discovery discovery = new Discovery { Name = "Worship", ImgUrl = "img/worship.png" };
            index.Discoveries.Add(discovery);
            discovery = new Discovery { Name = "Music", ImgUrl = "img/music.png" };
            index.Discoveries.Add(discovery);
            discovery = new Discovery { Name = "Ministries", ImgUrl = "img/ministries.png" };
            index.Discoveries.Add(discovery);
            index.FifthImgUrl = "img/donate.png";
            index.FifthTitle = "Support Our Mission";
            index.FifthDescription = "Your donation helps us continue our mission of reflecting the unconditional love of Christ through Christian worship, providing a warm welcome to all and a commitment to justice within the wider community. Every contribution makes a difference.";
            index.SixthTitle = "SUBSCRIBE TO OUR NEWSLETTER";
            index.Footers = new List<Footer>();
            Footer footer = new Footer { Title = "Explore" };
            footer.Tags = new List<string> { "Home", "About", "Worship", "Music", "Ministries" } ;
            index.Footers.Add(footer);
            footer = new Footer { Title = "Support" };
            footer.Tags = new List<string>{ "Volunteering", "Donations and Bequest", "Privacy Policy" };
            index.Footers.Add(footer);
            footer = new Footer { Title = "Contact Us" };
            footer.Tags = new List<string> { "office@ccsl.au", "+61 (2) 9211 0560", "812 George Street, Sydney NSW, 200" } ;
            index.Footers.Add(footer);
            index.Categories = new List<Category>();

            Category category = new Category();
            category.Title = "About";
            category.Tags = new List<string> { "Vicar's Welcome", "Our Tradition", "Baptism", "Weddings", "Reception/Confirmation", "Clergy and Lay Staff", "Archive & History" };
            category.Elements = new List<Element>();
            Element element = new Element();
            element.Title = "Vicar's Welcome";
            element.ImgUrl = "img/about/about_vicar_one.png";
            category.Elements.Add(element);
            element = new Element();
            element.Title = "Worship";
            element.ImgUrl = "img/about/about_worship_one.png";
            category.Elements.Add(element);
            element = new Element();
            element.Title = "Wedding";
            element.ImgUrl = "img/about/about_marriage_one.png";
            category.Elements.Add(element);
            index.Categories.Add(category);

            category = new Category();
            category.Title = "Worship";
            category.Tags = new List<string> { "Service Schedule", "Service Booklets", "Sermons", "livestreams" };
            category.Elements = new List<Element>();
            element = new Element();
            element.Title = "Service Schedule";
            element.ImgUrl = "img/about/about_worship.png";
            category.Elements.Add(element);
            element = new Element();
            element.Title = "Livestream";
            element.ImgUrl = "img/about/livestreams.png";
            category.Elements.Add(element);
            index.Categories.Add(category);

            category = new Category();
            category.Title = "Music";
            category.Tags = new List<string> { "Choir", "Our Musicians", "Music List", "Concerts", "Recordings", "Support Our Music", "Organ" };
            category.Elements = new List<Element>();
            element = new Element();
            element.Title = "Our Choir";
            element.ImgUrl = "img/about/music_one.png";
            category.Elements.Add(element);
            element = new Element();
            element.Title = "Support our music";
            element.ImgUrl = "img/about/music_two.png";
            category.Elements.Add(element);
            index.Categories.Add(category);

            category = new Category();
            category.Title = "Ministries";
            category.Tags = new List<string> { "Upcoming Events", "Children and Youth", "The St Laurence Center", "Christian Meditation", "Belltower Books", "Parish Magazine", "Prayer Resources" };
            category.Elements = new List<Element>();
            element = new Element();
            element.Title = "Children and Youth Ministries";
            element.ImgUrl = "img/about/ministry_one.png";
            category.Elements.Add(element);
            element = new Element();
            element.Title = "The St Laurence Center";
            element.ImgUrl = "img/about/ministry_two.png";
            category.Elements.Add(element);
            element = new Element();
            element.Title = "Upcoming events";
            element.ImgUrl = "img/about/ministry_three.png";
            category.Elements.Add(element);
            index.Categories.Add(category);

            category = new Category();
            category.Title = "Contact";
            category.Tags = new List<string> { "Opening hours & Getting here", "Parish Database Signup", "Monthly E-Newsletter", "Venue Hire" };
            category.Elements = new List<Element>();
            element = new Element();
            element.Title = "Opening Hours & Getting Here";
            element.ImgUrl = "img/about/contact_one.png";
            category.Elements.Add(element);
            element = new Element();
            element.Title = "Venue Hire";
            element.ImgUrl = "img/about/contact_two.png";
            category.Elements.Add(element);
            index.Categories.Add(category);

            category = new Category();
            category.Title = "Support";
            category.Tags = new List<string> { "Donations & Bequests", "Volunteering" };
            category.Elements = new List<Element>();
            element = new Element();
            element.Title = "Donations & Bequest";
            element.ImgUrl = "img/about/support_one.png";
            category.Elements.Add(element);
            element = new Element();
            element.Title = "Volunteering";
            element.ImgUrl = "img/about/support_two.png";
            category.Elements.Add(element);
            index.Categories.Add(category);


            return View(index);
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

        [HttpPost]
        public List<Slide> GetSlides()
        {
            int count = 0;
            List<Slide> slides = new List<Slide>(); 
            Slide show = new Slide();
            show.Title = "Restoration";
            show.UrlPath = "img/slider/restoration.png";
            show.ScheduleDate = " ";
            show.ScheduleTime = " ";
            show.Index = count;
            slides.Add(show);
            count++;
            show = new Slide();
            show.Title = "The National Braille Camp";
            show.UrlPath = "img/slider/evensong.png";
            show.ScheduleDate = "6/7/2025";
            show.ScheduleTime = "6:30 pm";
            show.Index = count;
            slides.Add(show);
            count++;
            show = new Slide();
            show.Title = "Monteverdi Vespers";
            show.UrlPath = "img/slider/monteverdi.png";
            show.ScheduleDate = "6/8/2025";
            show.ScheduleTime = "7:00 pm";
            show.Index = count;
            slides.Add(show);
            count++;
            show = new Slide();
            show.Title = "The Friday banquet";
            show.UrlPath = "img/slider/banquet.png";
            show.ScheduleDate = "4/7/2025";
            show.ScheduleTime = "12:00 pm";
            show.Index = count;
            slides.Add(show);
            count++;
            show = new Slide();
            show.Title = "Oxford Movement Sunday";
            show.UrlPath = "img/slider/oxford.png";
            show.ScheduleDate = "13/7/2025";
            show.ScheduleTime = "6:30 pm";
            show.Index = count;
            slides.Add(show);

            return slides;
        }
    }
}
