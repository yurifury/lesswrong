
from pylons import g
from r2.lib.pages import *
from pylons.i18n import _, ungettext
from urllib2 import Request, HTTPError, URLError, urlopen
from lxml.html import soupparser
from lxml.etree import tostring

log = g.log

class WikiPageCached:
    def title(self):
        raise NotImplementedError

    def url(self):
        raise NotImplementedError

    def fetch(self):
        u = self.url()
        content = g.rendercache.get(u)
        if not content:
            log.debug('fetching: %s' % u)
            req = Request(u)
            content = urlopen(req).read()
            g.rendercache.set(u, content)
        return content

    def getContent(self,str):
        return soupparser.fromstring(str).get_element_by_id('content')

    def html(self):
        str = self.fetch()
        elem = self.getContent(str)
        return tostring(elem, method='html', encoding='utf8', with_tail=False)

class AboutPage(WikiPageCached):
    def url(self): return 'http://wiki.lesswrong.com/wiki/Lesswrong:Aboutpage'
    def title(self): return _('About - Less wrong')

class MainPage(WikiPageCached):
    def url(self): return 'http://wiki.lesswrong.com/wiki/Lesswrong:Homepage'
    def title(self): return _('Less wrong')

class CommentPage(WikiPageCached):
    def url(self): return 'http://wiki.lesswrong.com/wiki/Lesswrong:Commentmarkuphelp'
