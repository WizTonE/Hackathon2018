using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;

namespace HackathonWeb
{
    public class Taxi
    {
        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("carTel")]
        public string Phone { get; set; }
    }
}