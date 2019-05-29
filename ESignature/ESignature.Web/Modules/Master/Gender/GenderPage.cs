
namespace ESignature.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Master/Gender"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.GenderRow))]
    public class GenderController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Master/Gender/GenderIndex.cshtml");
        }
    }
}