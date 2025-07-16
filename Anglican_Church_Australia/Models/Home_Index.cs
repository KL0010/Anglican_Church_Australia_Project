using System.Security.Policy;

namespace Anglican_Church_Australia.Models
{
    public class Home_Index
    {
        public int Id { get; set; }
        public string ParishName { get; set; }
        public string VideoUrl { get; set; }
        public string LogoUrl { get; set; }
        public string LogoUrlThumb { get; set; }
        public string BannerLogo { get; set; }
        public string ScrollDownLogo { get; set; }
        public string ScrollUpLogo { get; set; }

        public List<Slide> SlideShow { get; set; }


        public List<Discovery> Discoveries { get; set; }
        public string SecondTitle { get; set; }
        public string SecondDescription { get; set; }
        public List<Service> Services { get; set; }
        public string ForthTitle { get; set; }
        public string FifthImgUrl { get; set; }
        public string FifthTitle { get; set; }
        public string FifthDescription { get; set; }
        public string SixthTitle { get; set; }
        public List<Footer> Footers { get; set; }
        public List<Category> Categories { get; set; }

    }

    public class Service
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string ImgUrl { get; set; }
    }

    public class Slide
    {
        public int Id { get; set; }
        public string UrlPath { get; set; }
        public string Title { get; set; }
        public string ScheduleDate { get; set; }
        public string ScheduleTime { get; set; }
        public int Index { get; set; }
    }

    public class Discovery
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ImgUrl { get; set; }
    }

    public class Footer
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public List<string> Tags { get; set; }
    }

    public class Category
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public List<string> Tags { get; set; }
        public List<Element> Elements { get; set; }
    }

    public class Element
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string ImgUrl { get; set; }
    }
}