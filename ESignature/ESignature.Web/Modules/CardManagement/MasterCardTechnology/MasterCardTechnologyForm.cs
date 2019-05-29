
namespace ESignature.CardManagement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("CardManagement.MasterCardTechnology")]
    [BasedOnRow(typeof(Entities.MasterCardTechnologyRow), CheckNames = true)]
    public class MasterCardTechnologyForm
    {
        public String CardTechName { get; set; }
    }
}