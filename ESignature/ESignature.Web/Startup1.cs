using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(ESignature.Startup1))]

namespace ESignature
{
    public class Startup1
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();

            // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=316888
        }
    }
}
