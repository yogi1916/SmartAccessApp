using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Text;
using System.Web;

namespace ESignature.DAL
{
    public class Email
    {
        public static bool SendMail(string from, string to, string body, string Subject)
        {
            try
            {
                string port = ESignature.Properties.Settings.Default.smtpPortNo.ToString();
                string Host = ESignature.Properties.Settings.Default.smtpServerName.ToString();
                string Username = ESignature.Properties.Settings.Default.smtpUserName.ToString();
                string Password = ESignature.Properties.Settings.Default.smtpPassword.ToString();
                SmtpClient client = new SmtpClient();
                client.Port = Convert.ToInt32(port);
                client.Host = Host;
                client.EnableSsl = false;
                client.Timeout = 10000;
                client.DeliveryMethod = SmtpDeliveryMethod.Network;
                client.UseDefaultCredentials = false;
                client.Credentials = new System.Net.NetworkCredential(Username, Password);

                MailMessage mm = new MailMessage(from, to, Subject, body);
                mm.BodyEncoding = UTF8Encoding.UTF8;
                mm.IsBodyHtml = true;
                mm.DeliveryNotificationOptions = DeliveryNotificationOptions.OnFailure;
                client.Send(mm);                
                return true;
            }
            catch (SmtpException se)
            {                
                return false;
            }
        }
    }
}