
namespace ESignature.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.BloodGroups")]
    [BasedOnRow(typeof(Entities.BloodGroupsRow), CheckNames = true)]
    public class BloodGroupsForm
    {
        public String BloodGroup { get; set; }
    }
}