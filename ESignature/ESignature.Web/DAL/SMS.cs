using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Web;

namespace SmartiTrack2.Controllers
{
    public static class SMS
    {
        public static bool sendSMS(string Mobilelist, string Message)
        {

            try
            {
                bool msgSend = false;               
                int response = 0;
                string Page = null;
                StreamReader strread = null;
                Stream newStream = null;
                ASCIIEncoding encoding = new ASCIIEncoding();               
                string postData = "username=" + ESignature.Properties.Settings.Default.UserName + "&pass=" + ESignature.Properties.Settings.Default.Password + "&route=trans1" + "&senderid=CIANHC" + "&numbers=" + Mobilelist + "&message=" + Message + "";
                byte[] data = encoding.GetBytes(postData);
                HttpWebRequest wReq = (HttpWebRequest)WebRequest.Create(ESignature.Properties.Settings.Default.SMSURL);
                wReq.Method = "POST";
                wReq.ContentType = "application/x-www-form-urlencoded";
                wReq.ContentLength = data.Length;                
                newStream = wReq.GetRequestStream();
                newStream.Write(data, 0, data.Length);
                newStream.Close();

                HttpWebResponse wRes = (HttpWebResponse)wReq.GetResponse();
                strread = new StreamReader(wRes.GetResponseStream());
                Page = strread.ReadLine();
                wRes.Close();
                strread.Close();

                if ((wRes.StatusCode == HttpStatusCode.OK))
                {
                    msgSend = true;
                }
                else if (response == 0)
                {
                    msgSend = false;
                }
                else if (response == 2)
                {
                    msgSend = false;
                }
                return msgSend;
            }
            catch
            {
                return false;

            }
        }
    }
}