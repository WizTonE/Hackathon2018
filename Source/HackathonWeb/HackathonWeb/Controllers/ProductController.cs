using System.Web.Mvc;
using HackathonWeb.Models;
using Newtonsoft.Json;

namespace HackathonWeb.Controllers
{
    public class ProductController : Controller
    {
        // GET
        public ActionResult Index()
        {
            ProductModel model = new ProductModel();
            ViewData["Restaraunts"] = System.IO.File.ReadAllText(System.Web.HttpContext.Current.Server.MapPath("~/OpenDataSource/accessible-restaurant.json"));
            ViewData["TaxiInfo"] = JsonConvert.SerializeObject(OpenDataStorage.Instance.Taxis);
            return View(model);
        }
    }
}