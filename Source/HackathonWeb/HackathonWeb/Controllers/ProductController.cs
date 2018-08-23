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
            return View(model);
        }
    }
}