
namespace ESignature.Employee.Pages
{
    using ESignature.Employee.Entities;
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Employee/EmployeeMaster"), Route("{action=index}")]
    [PageAuthorize(typeof(EmployeeMasterRow))]
    public class EmployeeMasterController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Employee/EmployeeMaster/EmployeeMasterIndex.cshtml");
        }
    }
}