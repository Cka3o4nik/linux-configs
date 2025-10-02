function FindProxyForURL(url, host) {
  // our local URLs from the domains below example.com don't need a proxy:
  if (shExpMatch(host, "*.example.com")) {
    return "DIRECT";
  }

  // URLs within this network are accessed through
  // port 8080 on fastproxy.example.com:
  // if (isInNet(host, "10.0.0.0", "255.255.248.0")) {
  if (shExpMatch(host, "*.youtube.com") || shExpMatch(host, "*.youtu.be") || shExpMatch(host, "youtu.be")
  || shExpMatch(host, "*.googlevideo.com") || shExpMatch(host, "*.ytimg.com") || shExpMatch(host, "youtube.com")
  || shExpMatch(host, "*.chatgpt.com") || shExpMatch(host, "*.openai.com")
  || shExpMatch(host, "*.oaistatic.com") || shExpMatch(host, "chatgpt.com")
  || shExpMatch(host, "discord.com") || shExpMatch(host, "*.discord.com") 
  || shExpMatch(host, "*.discordapp.net") || shExpMatch(host, "*discordapp.com")
  || shExpMatch(host, "discordapp.com") || shExpMatch(host, "*.pornhub.com") || shExpMatch(host, "pornhub.com")
  || shExpMatch(host, "*.pornhub.org") || shExpMatch(host, "pornhub.org")
  || shExpMatch(host, "*.tiktok.com") || shExpMatch(host, "play.google.com")
  || shExpMatch(host, "*.notion.com") || shExpMatch(host, "*.notion.so")
  || shExpMatch(host, "*.discord.gg") || shExpMatch(host, "*.discord.media")
  || shExpMatch(host, "*.instagram.com") || shExpMatch(host, "instagram.com")
  || shExpMatch(host, "medium.com") || shExpMatch(host, "*.tnaflix.com")
  || shExpMatch(host, "*.facebook.com")  || shExpMatch(host, "*.fbcdn.net")
  || shExpMatch(host, "openai.com") || shExpMatch(host, "*.openai.com")
  ) {
    return "PROXY 127.0.0.1:8080";
  }

  // All other requests go through port 8080 of proxy.example.com.
  // should that fail to respond, go directly to the WWW:
  return "DIRECT";
  //return "PROXY proxy.example.com:8080; DIRECT";
}
