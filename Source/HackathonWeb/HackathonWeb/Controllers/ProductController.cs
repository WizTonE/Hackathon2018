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
            ViewData["Restaraunts"] = JsonConvert.SerializeObject(OpenDataStorage.Instance.Restaurants);
            ViewData["TaxiInfo"] = JsonConvert.SerializeObject(OpenDataStorage.Instance.Taxis);
            return View(model);
        }
    }
}