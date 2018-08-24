using System.Web.Mvc;
using HackathonWeb.Models;

namespace HackathonWeb.Controllers
{
    public class ProductController : Controller
    {
        // GET
        public ActionResult Index()
        {
            ProductModel model = new ProductModel();
            ViewData["Restaraunts"] = OpenDataStorage.Instance.Restaurants;
            ViewData["TaxiInfo"] = OpenDataStorage.Instance.Taxis;
            return View(model);
        }
    }
}