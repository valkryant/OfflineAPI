//Account
document.querySelector('#buttonaccount').addEventListener("click", async () => {
    document.getElementById("accountresponse").innerHTML = "Loading, please wait..."
    document.getElementById("accounturl").innerHTML = "Loading, please wait..."
    var xmlhttp = new XMLHttpRequest();
    var name = document.getElementById("AccountName").value == "" ? "yoohei" : document.getElementById("AccountName").value
    var tag = document.getElementById("AccountTag").value == "" ? "kawa" : document.getElementById("AccountTag").value
    var theUrl = `https://api.henrikdev.xyz/valorant/v1/account/${encodeURI(name)}/${encodeURI(tag)}`;
    xmlhttp.open("GET", theUrl);
    document.getElementById("progress-wrapper-account").style.cssText = "display: unset"
    document.getElementById("percentage-account").innerHTML = "25%"
    document.getElementById("progress-account").style.cssText = "width:25%"
    xmlhttp.onloadstart = function () {
        document.getElementById("percentage-account").innerHTML = "50%"
        document.getElementById("progress-account").style.cssText = "width:50%"
    }
    xmlhttp.onprogress = function () {
        document.getElementById("percentage-account").innerHTML = "75%"
        document.getElementById("progress-account").style.cssText = "width:75%"
    }
    xmlhttp.onload = function () {
        if (xmlhttp.readyState === xmlhttp.DONE) {
            document.getElementById("progress-wrapper-account").style.cssText = "display: none"
            document.getElementById("accountresponse").innerHTML = JSON.stringify(JSON.parse(xmlhttp.response), null, 2)
            document.getElementById("accounturl").innerHTML = xmlhttp.responseURL
        }
    };
    xmlhttp.send()
})

//MMR
document.querySelector('#buttonmmr').addEventListener("click", async () => {
    document.getElementById("mmrresponse").innerHTML = "Loading, please wait..."
    document.getElementById("mmrurl").innerHTML = "Loading, please wait..."
    var xmlhttp = new XMLHttpRequest();
    var name = document.getElementById("MMRName").value == "" ? "yoohei" : document.getElementById("MMRName").value
    var tag = document.getElementById("MMRTag").value == "" ? "kawa" : document.getElementById("MMRTag").value
    var filter = (document.getElementById("SelectMMRVersion").value == "v2" && document.getElementById("MMRFilter").value != "") ? `?filter=${document.getElementById("MMRFilter").value}` : ""
    var theUrl = `https://api.henrikdev.xyz/valorant/${document.getElementById("SelectMMRVersion").value}/mmr/${document.getElementById("SelectMMR").value}/${name}/${tag}${filter}`;
    xmlhttp.open("GET", theUrl);
    document.getElementById("progress-wrapper-mmr").style.cssText = "display: unset"
    document.getElementById("percentage-mmr").innerHTML = "25%"
    document.getElementById("progress-mmr").style.cssText = "width:25%"
    xmlhttp.onloadstart = function () {
        document.getElementById("percentage-mmr").innerHTML = "50%"
        document.getElementById("progress-mmr").style.cssText = "width:50%"
    }
    xmlhttp.onprogress = function () {
        document.getElementById("percentage-mmr").innerHTML = "75%"
        document.getElementById("progress-mmr").style.cssText = "width:75%"
    }
    xmlhttp.onload = function () {
    if (xmlhttp.readyState === xmlhttp.DONE) {
        document.getElementById("progress-wrapper-mmr").style.cssText = "display: none"
        if(xmlhttp.status == "204") {
            document.getElementById("mmrresponse").innerHTML = "Status 204, which means that the User has not played a rank match for a while or you queued the wrong region"
            document.getElementById("mmrurl").innerHTML = xmlhttp.responseURL
        } else {
            document.getElementById("mmrresponse").innerHTML = JSON.stringify(JSON.parse(xmlhttp.response), null, 2)
            document.getElementById("mmrurl").innerHTML = xmlhttp.responseURL
        }
    }
    };
    xmlhttp.send()
})
document.querySelector("#SelectMMRVersion").addEventListener("change", async () => {
    if(document.getElementById("SelectMMRVersion").value == "v1") {
        document.getElementById("mmrnote2").style.cssText = "margin-bottom: 15px;display: none;"
        document.getElementById("MMRFilterDiv").style.cssText = "display: none;"
    }
    if(document.getElementById("SelectMMRVersion").value == "v2") {
        document.getElementById("mmrnote2").style.cssText = "margin-bottom: 15px;display: unset;"
        document.getElementById("MMRFilterDiv").style.cssText = "display: unset;"
    }
})

//MMR-Puuid
document.querySelector('#buttonmmrpuuid').addEventListener("click", async () => {
    document.getElementById("mmrpuuidresponse").innerHTML = "Loading, please wait..."
    document.getElementById("mmrpuuidurl").innerHTML = "Loading, please wait..."
    var xmlhttp = new XMLHttpRequest();
    var name = document.getElementById("MMRPuuid").value == "" ? "54942ced-1967-5f66-8a16-1e0dae875641" : document.getElementById("MMRPuuid").value
    var filter = (document.getElementById("SelectMMRPuuidVersion").value == "v2" && document.getElementById("MMRPuuidFilter").value != "") ? `?filter=${document.getElementById("MMRPuuidFilter").value}` : ""
    var theUrl = `https://api.henrikdev.xyz/valorant/${document.getElementById("SelectMMRPuuidVersion").value}/by-puuid/mmr/${document.getElementById("SelectMMRPuuid").value}/${name}${filter}`;
    xmlhttp.open("GET", theUrl);
    document.getElementById("progress-wrapper-mmr-puuid").style.cssText = "display: unset"
    document.getElementById("percentage-mmr-puuid").innerHTML = "25%"
    document.getElementById("progress-mmr-puuid").style.cssText = "width:25%"
    xmlhttp.onloadstart = function () {
        document.getElementById("percentage-mmr-puuid").innerHTML = "50%"
        document.getElementById("progress-mmr-puuid").style.cssText = "width:50%"
    }
    xmlhttp.onprogress = function () {
        document.getElementById("percentage-mmr-puuid").innerHTML = "75%"
        document.getElementById("progress-mmr-puuid").style.cssText = "width:75%"
    }
    xmlhttp.onload = function () {
    if (xmlhttp.readyState === xmlhttp.DONE) {
        document.getElementById("progress-wrapper-mmr-puuid").style.cssText = "display: none"
        if(xmlhttp.status == "204") {
            document.getElementById("mmrpuuidresponse").innerHTML = "Status 204, which means that the User has not played a rank match in the last 20 Matches or you queued the wrong region"
            document.getElementById("mmrpuuidurl").innerHTML = xmlhttp.responseURL
        } else {
            console.log(xmlhttp)
            document.getElementById("mmrpuuidresponse").innerHTML = JSON.stringify(JSON.parse(xmlhttp.response), null, 2)
            document.getElementById("mmrpuuidurl").innerHTML = xmlhttp.responseURL
        }
    }
    };
    xmlhttp.send()
})
document.querySelector("#SelectMMRPuuidVersion").addEventListener("change", async () => {
    if(document.getElementById("SelectMMRPuuidVersion").value == "v1") {
        document.getElementById("mmrpuuidnote2").style.cssText = "margin-bottom: 15px;display: none;"
        document.getElementById("MMRPuuidFilterDiv").style.cssText = "display: none;"
    }
    if(document.getElementById("SelectMMRPuuidVersion").value == "v2") {
        document.getElementById("mmrpuuidnote2").style.cssText = "margin-bottom: 15px;display: unset;"
        document.getElementById("MMRPuuidFilterDiv").style.cssText = "display: unset;"
    }
})

//MMR-History
document.querySelector('#buttonmmrhistory').addEventListener("click", async () => {
    document.getElementById("mmrhistoryresponse").innerHTML = "Loading, please wait..."
    document.getElementById("mmrhistoryurl").innerHTML = "Loading, please wait..."
    var xmlhttp = new XMLHttpRequest();
    var name = document.getElementById("MMRHistoryName").value == "" ? "yoohei" : document.getElementById("MMRHistoryName").value
    var tag = document.getElementById("MMRHistoryTag").value == "" ? "kawa" : document.getElementById("MMRHistoryTag").value
    var theUrl = `https://api.henrikdev.xyz/valorant/v1/mmr-history/${document.getElementById("SelectMMRHistory").value}/${encodeURI(name)}/${encodeURI(tag)}`;
    xmlhttp.open("GET", theUrl);
    document.getElementById("progress-wrapper-mmr-history").style.cssText = "display: unset"
    document.getElementById("percentage-mmr-history").innerHTML = "25%"
    document.getElementById("progress-mmr-history").style.cssText = "width:25%"
    xmlhttp.onloadstart = function () {
        document.getElementById("percentage-mmr-history").innerHTML = "50%"
        document.getElementById("progress-mmr-history").style.cssText = "width:50%"
    }
    xmlhttp.onprogress = function () {
        document.getElementById("percentage-mmr-history").innerHTML = "75%"
        document.getElementById("progress-mmr-history").style.cssText = "width:75%"
    }
    xmlhttp.onload = function () {
        if (xmlhttp.readyState === xmlhttp.DONE) {
            if(xmlhttp.status == "204") {
                document.getElementById("mmrhistoryresponse").innerHTML = "Status 204, which means that the User has not played a rank match in the last 20 Matches or you queued the wrong region"
            }
            if(xmlhttp.status == "200") {
                document.getElementById("mmrhistoryresponse").innerHTML = JSON.stringify(JSON.parse(xmlhttp.response), null, 2)
            }
            document.getElementById("progress-wrapper-mmr-history").style.cssText = "display: none"
            document.getElementById("mmrhistoryurl").innerHTML = xmlhttp.responseURL
        }
    };
    xmlhttp.send()
})

//MMR-History-Puuid
document.querySelector('#buttonmmrhistorypuuid').addEventListener("click", async () => {
    document.getElementById("mmrhistorypuuidresponse").innerHTML = "Loading, please wait..."
    document.getElementById("mmrhistorypuuidurl").innerHTML = "Loading, please wait..."
    var xmlhttp = new XMLHttpRequest();
    var id = document.getElementById("MMRHistoryPuuid").value == "" ? "54942ced-1967-5f66-8a16-1e0dae875641" : document.getElementById("MMRHistoryPuuid").value
    var theUrl = `https://api.henrikdev.xyz/valorant/v1/by-puuid/mmr-history/${document.getElementById("SelectMMRHistoryPuuid").value}/${id}`;
    xmlhttp.open("GET", theUrl);
    document.getElementById("progress-wrapper-mmr-history-puuid").style.cssText = "display: unset"
    document.getElementById("percentage-mmr-history-puuid").innerHTML = "25%"
    document.getElementById("progress-mmr-history-puuid").style.cssText = "width:25%"
    xmlhttp.onloadstart = function () {
        document.getElementById("percentage-mmr-history-puuid").innerHTML = "50%"
        document.getElementById("progress-mmr-history-puuid").style.cssText = "width:50%"
    }
    xmlhttp.onprogress = function () {
        document.getElementById("percentage-mmr-history-puuid").innerHTML = "75%"
        document.getElementById("progress-mmr-history-puuid").style.cssText = "width:75%"
    }
    xmlhttp.onload = function () {
        if (xmlhttp.readyState === xmlhttp.DONE) {
            if(xmlhttp.status == "204") {
                document.getElementById("mmrhistorypuuidresponse").innerHTML = "Status 204, which means that the User has not played a rank match in the last 20 Matches or you queued the wrong region"
            }
            if(xmlhttp.status == "200") {
                document.getElementById("mmrhistorypuuidresponse").innerHTML = JSON.stringify(JSON.parse(xmlhttp.response), null, 2)
            }
            document.getElementById("progress-wrapper-mmr-history-puuid").style.cssText = "display: none"
            document.getElementById("mmrhistorypuuidurl").innerHTML = xmlhttp.responseURL
        }
    };
    xmlhttp.send()
})


//Matches
document.querySelector('#buttonmatches').addEventListener("click", async () => {
    document.getElementById("matchesresponse").innerHTML = "Loading, please wait..."
    document.getElementById("matchesurl").innerHTML = "Loading, please wait..."
    var xmlhttp = new XMLHttpRequest();
    var name = document.getElementById("MatchesName").value == "" ? "yoohei" : document.getElementById("MatchesName").value
    var tag = document.getElementById("MatchesTag").value == "" ? "kawa" : document.getElementById("MatchesTag").value
    var filter = document.getElementById("MatchesFilter").value == "" ? "" : "?filter=" + document.getElementById("MatchesFilter").value
    var theUrl = `https://api.henrikdev.xyz/valorant/v3/matches/${document.getElementById("SelectMatches").value}/${name}/${tag}${filter}`;
    xmlhttp.open("GET", theUrl);
    document.getElementById("progress-wrapper-matches").style.cssText = "display: unset"
    document.getElementById("percentage-matches").innerHTML = "25%"
    document.getElementById("progress-matches").style.cssText = "width:25%"
    xmlhttp.onloadstart = function () {
        document.getElementById("percentage-matches").innerHTML = "50%"
        document.getElementById("progress-matches").style.cssText = "width:50%"
    }
    xmlhttp.onprogress = function () {
        document.getElementById("percentage-matches").innerHTML = "75%"
        document.getElementById("progress-matches").style.cssText = "width:75%"
    }
    xmlhttp.onload = function () {
    if (xmlhttp.readyState === xmlhttp.DONE) {
        console.log(xmlhttp)
        document.getElementById("progress-wrapper-matches").style.cssText = "display: none"
        document.getElementById("matchesresponse").innerHTML = JSON.stringify(JSON.parse(xmlhttp.response), null, 2)
        document.getElementById("matchesurl").innerHTML = xmlhttp.responseURL
    }
    };
    xmlhttp.send()
})

//Matches-PUUID
document.querySelector('#buttonmatchespuuid').addEventListener("click", async () => {
    document.getElementById("matchespuuidresponse").innerHTML = "Loading, please wait..."
    document.getElementById("matchespuuidurl").innerHTML = "Loading, please wait..."
    var xmlhttp = new XMLHttpRequest();
    var id = document.getElementById("MatchesPuuid").value == "" ? "54942ced-1967-5f66-8a16-1e0dae875641" : document.getElementById("MatchesPuuid").value
    var filter = document.getElementById("MatchesFilter").value == "" ? "" : "?filter=" + document.getElementById("MatchesFilter").value
    var theUrl = `https://api.henrikdev.xyz/valorant/v3/by-puuid/matches/${document.getElementById("SelectMatchesPuuid").value}/${id}${filter}`;
    xmlhttp.open("GET", theUrl);
    document.getElementById("progress-wrapper-matches-puuid").style.cssText = "display: unset"
    document.getElementById("percentage-matches-puuid").innerHTML = "25%"
    document.getElementById("progress-matches-puuid").style.cssText = "width:25%"
    xmlhttp.onloadstart = function () {
        document.getElementById("percentage-matches-puuid").innerHTML = "50%"
        document.getElementById("progress-matches-puuid").style.cssText = "width:50%"
    }
    xmlhttp.onprogress = function () {
        document.getElementById("percentage-matches-puuid").innerHTML = "75%"
        document.getElementById("progress-matches-puuid").style.cssText = "width:75%"
    }
    xmlhttp.onload = function () {
    if (xmlhttp.readyState === xmlhttp.DONE) {
        console.log(xmlhttp)
        document.getElementById("progress-wrapper-matches-puuid").style.cssText = "display: none"
        document.getElementById("matchespuuidresponse").innerHTML = JSON.stringify(JSON.parse(xmlhttp.response), null, 2)
        document.getElementById("matchespuuidurl").innerHTML = xmlhttp.responseURL
    }
    };
    xmlhttp.send()
})

//Match by ID
document.querySelector('#buttonmatchid').addEventListener("click", async () => {
    document.getElementById("matchidresponse").innerHTML = "Loading, please wait..."
    document.getElementById("matchidurl").innerHTML = "Loading, please wait..."
    var xmlhttp = new XMLHttpRequest();
    var id = document.getElementById("matchidinput").value == "" ? "3ce17074-d74f-493c-8665-a8937838d066" : document.getElementById("matchidinput").value
    var theUrl = `https://api.henrikdev.xyz/valorant/v2/match/${id}`;
    xmlhttp.open("GET", theUrl);
    document.getElementById("progress-wrapper-matchid").style.cssText = "display: unset"
    document.getElementById("percentage-matchid").innerHTML = "25%"
    document.getElementById("progress-matchid").style.cssText = "width:25%"
    xmlhttp.onloadstart = function () {
        document.getElementById("percentage-matchid").innerHTML = "50%"
        document.getElementById("progress-matchid").style.cssText = "width:50%"
    }
    xmlhttp.onprogress = function () {
        document.getElementById("percentage-matchid").innerHTML = "75%"
        document.getElementById("progress-matchid").style.cssText = "width:75%"
    }
    xmlhttp.onload = function () {
    if (xmlhttp.readyState === xmlhttp.DONE) {
        console.log(xmlhttp)
        document.getElementById("progress-wrapper-matchid").style.cssText = "display: none"
        document.getElementById("matchidresponse").innerHTML = JSON.stringify(JSON.parse(xmlhttp.response), null, 2)
        document.getElementById("matchidurl").innerHTML = xmlhttp.responseURL
    }
    };
    xmlhttp.send()
})

//Leaderboard
document.querySelector('#buttonlb').addEventListener("click", async () => {
    document.getElementById("lbresponse").innerHTML = "Loading, please wait..."
    document.getElementById("lburl").innerHTML = "Loading, please wait..."
    var xmlhttp = new XMLHttpRequest();
    var region = document.getElementById("Selectlb").value == "" ? "eu" : document.getElementById("Selectlb").value
    var filter = (document.getElementById("LBFilterName").value != "" && document.getElementById("LBFilterTag").value != "") ? `?name=${document.getElementById("LBFilterName").value}&tag=${document.getElementById("LBFilterTag").value}` : ""
    var theUrl = `https://api.henrikdev.xyz/valorant/v1/leaderboard/${region}${filter}`;
    xmlhttp.open("GET", theUrl);
    document.getElementById("progress-wrapper-lb").style.cssText = "display: unset"
    document.getElementById("percentage-lb").innerHTML = "25%"
    document.getElementById("progress-lb").style.cssText = "width:25%"
    xmlhttp.onloadstart = function () {
        document.getElementById("percentage-lb").innerHTML = "50%"
        document.getElementById("progress-lb").style.cssText = "width:50%"
    }
    xmlhttp.onprogress = function () {
        document.getElementById("percentage-lb").innerHTML = "75%"
        document.getElementById("progress-lb").style.cssText = "width:75%"
    }
    xmlhttp.onload = function () {
    if (xmlhttp.readyState === xmlhttp.DONE) {
        console.log(xmlhttp)
        document.getElementById("progress-wrapper-lb").style.cssText = "display: none"
        document.getElementById("lbresponse").innerHTML = JSON.stringify(JSON.parse(xmlhttp.response), null, 2)
        document.getElementById("lburl").innerHTML = xmlhttp.responseURL
    }
    };
    xmlhttp.send()
})

//Status
document.querySelector('#buttonstatus').addEventListener("click", async () => {
    document.getElementById("statusresponse").innerHTML = "Loading, please wait..."
    document.getElementById("statusurl").innerHTML = "Loading, please wait..."
    var xmlhttp = new XMLHttpRequest();
    var region = document.getElementById("Selectstatus").value == "" ? "eu" : document.getElementById("Selectstatus").value
    var theUrl = `https://api.henrikdev.xyz/valorant/v1/status/${region}`;
    xmlhttp.open("GET", theUrl);
    document.getElementById("progress-wrapper-status").style.cssText = "display: unset"
    document.getElementById("percentage-status").innerHTML = "25%"
    document.getElementById("progress-status").style.cssText = "width:25%"
    xmlhttp.onloadstart = function () {
        document.getElementById("percentage-status").innerHTML = "50%"
        document.getElementById("progress-status").style.cssText = "width:50%"
    }
    xmlhttp.onprogress = function () {
        document.getElementById("percentage-status").innerHTML = "75%"
        document.getElementById("progress-status").style.cssText = "width:75%"
    }
    xmlhttp.onload = function () {
    if (xmlhttp.readyState === xmlhttp.DONE) {
        console.log(xmlhttp)
        document.getElementById("progress-wrapper-status").style.cssText = "display: none"
        document.getElementById("statusresponse").innerHTML = JSON.stringify(JSON.parse(xmlhttp.response), null, 2)
        document.getElementById("statusurl").innerHTML = xmlhttp.responseURL
    }
    };
    xmlhttp.send()
})

//Content
document.querySelector('#buttoncontent').addEventListener("click", async () => {
    document.getElementById("contentresponse").innerHTML = "Loading, please wait..."
    document.getElementById("contenturl").innerHTML = "Loading, please wait..."
    var xmlhttp = new XMLHttpRequest();
    var theUrl = `https://api.henrikdev.xyz/valorant/v1/content`;
    xmlhttp.open("GET", theUrl);
    document.getElementById("progress-wrapper-content").style.cssText = "display: unset"
    document.getElementById("percentage-content").innerHTML = "25%"
    document.getElementById("progress-content").style.cssText = "width:25%"
    xmlhttp.onloadstart = function () {
        document.getElementById("percentage-content").innerHTML = "50%"
        document.getElementById("progress-content").style.cssText = "width:50%"
    }
    xmlhttp.onprogress = function () {
        document.getElementById("percentage-content").innerHTML = "75%"
        document.getElementById("progress-content").style.cssText = "width:75%"
    }
    xmlhttp.onload = function () {
    if (xmlhttp.readyState === xmlhttp.DONE) {
        console.log(xmlhttp)
        document.getElementById("progress-wrapper-content").style.cssText = "display: none"
        document.getElementById("contentresponse").innerHTML = JSON.stringify(JSON.parse(xmlhttp.response), null, 2)
        document.getElementById("contenturl").innerHTML = xmlhttp.responseURL
    }
    };
    xmlhttp.send()
})

//Store-offers
document.querySelector('#buttonstoreoffer').addEventListener("click", async () => {
    document.getElementById("storeofferresponse").innerHTML = "Loading, please wait..."
    document.getElementById("storeofferurl").innerHTML = "Loading, please wait..."
    var xmlhttp = new XMLHttpRequest();
    var theUrl = `https://api.henrikdev.xyz/valorant/v1/store-offers`;
    xmlhttp.open("GET", theUrl);
    document.getElementById("progress-wrapper-store-offers").style.cssText = "display: unset"
    document.getElementById("percentage-store-offers").innerHTML = "25%"
    document.getElementById("progress-store-offers").style.cssText = "width:25%"
    xmlhttp.onloadstart = function () {
        document.getElementById("percentage-store-offers").innerHTML = "50%"
        document.getElementById("progress-store-offers").style.cssText = "width:50%"
    }
    xmlhttp.onprogress = function () {
        document.getElementById("percentage-store-offers").innerHTML = "75%"
        document.getElementById("progress-store-offers").style.cssText = "width:75%"
    }
    xmlhttp.onload = function () {
    if (xmlhttp.readyState === xmlhttp.DONE) {
        console.log(xmlhttp)
        document.getElementById("progress-wrapper-store-offers").style.cssText = "display: none"
        document.getElementById("storeofferresponse").innerHTML = JSON.stringify(JSON.parse(xmlhttp.response), null, 2)
        document.getElementById("storeofferurl").innerHTML = xmlhttp.responseURL
    }
    };
    xmlhttp.send()
})

//Store-featured
document.querySelector('#buttonstorefeatured').addEventListener("click", async () => {
    document.getElementById("storefeaturedresponse").innerHTML = "Loading, please wait..."
    document.getElementById("storefeaturedurl").innerHTML = "Loading, please wait..."
    var xmlhttp = new XMLHttpRequest();
    var theUrl = `https://api.henrikdev.xyz/valorant/v1/store-featured`;
    xmlhttp.open("GET", theUrl);
    document.getElementById("progress-wrapper-store-featured").style.cssText = "display: unset"
    document.getElementById("percentage-store-featured").innerHTML = "25%"
    document.getElementById("progress-store-featured").style.cssText = "width:25%"
    xmlhttp.onloadstart = function () {
        document.getElementById("percentage-store-featured").innerHTML = "50%"
        document.getElementById("progress-store-featured").style.cssText = "width:50%"
    }
    xmlhttp.onprogress = function () {
        document.getElementById("percentage-store-featured").innerHTML = "75%"
        document.getElementById("progress-store-featured").style.cssText = "width:75%"
    }
    xmlhttp.onload = function () {
    if (xmlhttp.readyState === xmlhttp.DONE) {
        console.log(xmlhttp)
        document.getElementById("progress-wrapper-store-featured").style.cssText = "display: none"
        document.getElementById("storefeaturedresponse").innerHTML = JSON.stringify(JSON.parse(xmlhttp.response), null, 2)
        document.getElementById("storefeaturedurl").innerHTML = xmlhttp.responseURL
    }
    };
    xmlhttp.send()
})

//Website
document.querySelector('#buttonwebsite').addEventListener("click", async () => {
    document.getElementById("websiteresponse").innerHTML = "Loading, please wait..."
    document.getElementById("websiteurl").innerHTML = "Loading, please wait..."
    var xmlhttp = new XMLHttpRequest();
    var filter
    document.getElementById("websiteinput").value == "" ? filter = "" : filter = "?filter=" + document.getElementById("websiteinput").value
    var theUrl = `https://api.henrikdev.xyz/valorant/v1/website/${document.getElementById("Selectwebsite").value}${filter}`;
    xmlhttp.open("GET", theUrl);
    document.getElementById("progress-wrapper-website").style.cssText = "display: unset"
    document.getElementById("percentage-website").innerHTML = "25%"
    document.getElementById("progress-website").style.cssText = "width:25%"
    xmlhttp.onloadstart = function () {
        document.getElementById("percentage-website").innerHTML = "50%"
        document.getElementById("progress-website").style.cssText = "width:50%"
    }
    xmlhttp.onprogress = function () {
        document.getElementById("percentage-website").innerHTML = "75%"
        document.getElementById("progress-website").style.cssText = "width:75%"
    }
    xmlhttp.onload = function () {
    if (xmlhttp.readyState === xmlhttp.DONE) {
        console.log(xmlhttp)
        document.getElementById("progress-wrapper-website").style.cssText = "display: none"
        document.getElementById("websiteresponse").innerHTML = JSON.stringify(JSON.parse(xmlhttp.response), null, 2)
        document.getElementById("websiteurl").innerHTML = xmlhttp.responseURL
    }
    };
    xmlhttp.send()
})