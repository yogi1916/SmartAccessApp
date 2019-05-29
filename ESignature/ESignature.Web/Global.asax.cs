
namespace ESignature
{
    using System;
    using System.Globalization;
    using System.Linq;
    using System.Threading;
    using System.Web;
    using System.Web.Mvc;
    using System.Web.Routing;

    public class Global : System.Web.HttpApplication
    {
        protected void Application_Start(object sender, EventArgs e)
        {
            AreaRegistration.RegisterAllAreas();

            //WebApiConfig.Register(GlobalConfiguration.Configuration);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            //BundleConfig.RegisterBundles(BundleTable.Bundles);
            System.Web.Http.GlobalConfiguration.Configure(WebApiConfig.Register);
            ValueProviderFactories.Factories.Remove(
                ValueProviderFactories.Factories.OfType<JsonValueProviderFactory>().First());

            ViewEngines.Engines.Clear();
            ViewEngines.Engines.Add(new RazorViewEngine());

            SiteInitialization.ApplicationStart();

            System.Data.SqlClient.SqlDependency.Start(@"Data Source=localhost; Initial Catalog=SmartAccess; User ID=sa;Password=smarti123;Integrated Security=False");

        }

        protected void Application_End(object sender, EventArgs e)
        {
            SiteInitialization.ApplicationEnd();
        }

        protected void Application_BeginRequest(object sender, EventArgs e)
        {
            var cookie = Request.Cookies["LanguagePreference"];
            if (cookie != null && !string.IsNullOrEmpty(cookie.Value))
            {
                try
                {
                    var culture = CultureInfo.GetCultureInfo(cookie.Value);
                    Thread.CurrentThread.CurrentUICulture = culture;
                }
                catch (CultureNotFoundException)
                {
                    // ignore
                }
            }
            HttpContext.Current.Response.AddHeader("Access-Control-Allow-Origin", "*");
            if (HttpContext.Current.Request.HttpMethod == "OPTIONS")
            {
                //These headers are handling the "pre-flight" OPTIONS call sent by the browser
                HttpContext.Current.Response.AddHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
                HttpContext.Current.Response.AddHeader("Access-Control-Allow-Headers", "Content-Type, Accept");
                HttpContext.Current.Response.AddHeader("Access-Control-Max-Age", "1728000");
                HttpContext.Current.Response.End();
            }
        }

        protected void Application_AuthenticateRequest(object sender, EventArgs e)
        {
        }

        protected void Application_Error(object sender, EventArgs e)
        {
        }
    }
}