<?xml version="1.0" encoding="iso-8859-1"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
  <head>
    <title><xsl:value-of select="rss/channel/title"/> RSS Feed</title>
    <style type="text/css">
    @import url(css/rss.css);
    </style>
  </head>
  <body>
    <div id="content">
      <xsl:for-each select="rss/channel/item">
      <div class="article">
        <h2><xsl:value-of select="contact/name"/></h2>
        <xsl:value-of select="contact/message"/>
      </div>
      </xsl:for-each>
    </div>
  </body>
</html>
</xsl:template>
</xsl:stylesheet>