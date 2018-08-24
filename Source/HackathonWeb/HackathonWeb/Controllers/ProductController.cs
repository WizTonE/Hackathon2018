using System.Web.Mvc;
using HackathonWeb.Models;
using System.Linq;

namespace HackathonWeb.Controllers
{
    public class ProductController : Controller
    {
        // GET
        public ActionResult Index()
        {
            ProductModel model = new ProductModel();
            return View(OpenDataStorage.Instance.Restaurants.ToList());
        }
    }
}