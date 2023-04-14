import{_ as o,c as t,o as r,Q as e}from"./chunks/framework.8adc4ca2.js";const P=JSON.parse('{"title":"计算机网络","description":"","frontmatter":{"title":"计算机网络","order":1},"headers":[],"relativePath":"pages/qa/base/network.md","lastUpdated":1681459433000}'),n={name:"pages/qa/base/network.md"},s=e('<h1 id="计算机网络" tabindex="-1">计算机网络 <a class="header-anchor" href="#计算机网络" aria-label="Permalink to &quot;计算机网络&quot;">​</a></h1><h2 id="基础篇" tabindex="-1">基础篇 <a class="header-anchor" href="#基础篇" aria-label="Permalink to &quot;基础篇&quot;">​</a></h2><h3 id="常见的-http-请求方法" tabindex="-1">常见的 HTTP 请求方法 <a class="header-anchor" href="#常见的-http-请求方法" aria-label="Permalink to &quot;常见的 HTTP 请求方法&quot;">​</a></h3><p><strong>GET：</strong> 获取资源</p><p><strong>POST：</strong> 提交资源</p><p><strong>PUT：</strong> 提交并修改资源</p><p><strong>PATCH：</strong> 对资源部分修改</p><p><strong>OPTIONS：</strong> 探头，用来探测是否支持请求方法、跨域、安全</p><p><strong>CONNECT：</strong> 与代理服务器建立管道，使用管道进行 TCP 通信</p><p><strong>TRACE：</strong> 让服务器原样返回客户端的请求信息内容，用于测试或诊断</p><h3 id="页面从输入-url-后发生啥" tabindex="-1">页面从输入 URL 后发生啥？ <a class="header-anchor" href="#页面从输入-url-后发生啥" aria-label="Permalink to &quot;页面从输入 URL 后发生啥？&quot;">​</a></h3><ol><li><strong>DNS 解析</strong>：浏览器先从 URL 中获取域名，然后将域名发送给 DNS 服务器进行解析，获取目标服务器的 IP 地址。</li><li><strong>建立 TCP 连接</strong>：浏览器通过获取的 IP 地址和端口号，向目标服务器发起 TCP 连接请求，并等待服务器回应。</li><li><strong>发送 HTTP 请求</strong>：TCP 连接建立后，浏览器向服务器发送 HTTP 请求，请求内容包括请求行、请求头和请求体。</li><li><strong>服务器响应</strong>：服务器接收到请求后，开始处理请求并返回响应数据。响应数据包括响应头和响应体。</li><li><strong>浏览器解析渲染页面</strong>：浏览器接收到响应数据后，开始对数据进行解析。 HTML 解析器和 CSS 解析器并行构建<strong>DOM 树</strong>和<strong>CSS 树</strong>，然后结合成<strong>CSSOM 树</strong> ，JS 引擎运行 JS 代码，进行 DOM 的操作或修改。然后进行 UI 布局、绘制，进而将整个页面渲染出来</li><li><strong>断开连接</strong>：当所有内容都加载完成后，浏览器关闭与服务器的 TCP 连接，页面加载完毕。</li></ol><h3 id="什么是-websocket" tabindex="-1">什么是 WebSocket？ <a class="header-anchor" href="#什么是-websocket" aria-label="Permalink to &quot;什么是 WebSocket？&quot;">​</a></h3><p><code>WebSocket</code>是一种网络通信协议，是在 TCP 连接上进行全双工通信的协议。</p><p><code>Websocket</code>可以实现客户端和服务端之间进行全双工通信，任何一方都可以通过建立连接将数据传到另一端，它只需要建立一次连接，就可以一直保持连接状态</p><h3 id="队头阻塞" tabindex="-1">队头阻塞 <a class="header-anchor" href="#队头阻塞" aria-label="Permalink to &quot;队头阻塞&quot;">​</a></h3><h3 id="http-状态码有哪些状态码" tabindex="-1">HTTP 状态码有哪些状态码 <a class="header-anchor" href="#http-状态码有哪些状态码" aria-label="Permalink to &quot;HTTP 状态码有哪些状态码&quot;">​</a></h3><p><strong>1XX：</strong> 信息类状态码</p><p><strong>2XX：</strong> 成功状态码</p><p><strong>3XX：</strong> 重定向状态码</p><p><strong>4XX：</strong> 请求错误状态码</p><p><strong>5XX：</strong> 服务端错误状态码</p><p><strong>2XX</strong></p><ul><li><strong>200：</strong> 成功处理请求</li><li><strong>201：</strong> 成功创建，一般应用在 POST</li><li><strong>202：</strong> 服务端接收请求，但尚未处理，不保证完成请求</li><li><strong>204：</strong> 请求成功，但是相应爆文不含实体的主体部分</li></ul><p><strong>3XX</strong></p><ul><li><strong>301：</strong> 永久性重定向</li><li><strong>302：</strong> 临时重定向</li><li><strong>304：</strong> 协商缓存命中</li></ul><p><strong>4XX</strong></p><ul><li><strong>400：</strong> 请求内容存在语法错误</li><li><strong>401：</strong> 请求无权限</li><li><strong>403：</strong> 请求资源被服务端拒绝</li><li><strong>404：</strong> 无法找到请求的资源</li></ul><p><strong>5XX</strong></p><ul><li><strong>500：</strong> 服务器报错</li><li><strong>501：</strong> 服务端不支持当前请求所需要的某个功能</li><li><strong>503：</strong> 服务器暂时处于超负载或停机维护，无法处理请求</li></ul><h3 id="什么是-dns-并说明-dns-解析过程" tabindex="-1">什么是 DNS？并说明 DNS 解析过程 <a class="header-anchor" href="#什么是-dns-并说明-dns-解析过程" aria-label="Permalink to &quot;什么是 DNS？并说明 DNS 解析过程&quot;">​</a></h3><p><code>DNS（Domain Name System）域名系统</code>，<strong>把请求域名转换成 IP</strong></p><p>在浏览器中输入一个域名，解析流程如下：</p><ol><li>客户端发送一个 DNS<strong>查询请求到本地 DNS 服务器</strong>。本地 DNS 服务器<strong>已经缓存</strong>该域名对应的 IP 地址，则它会直接返回该 IP 地址给客户端，否则将向其他 DNS 服务器发起请求。</li><li>如果没有，将向<strong>根域名服务器</strong>发出请求。查询<strong>该域名的顶级域名服务器的 IP 地址</strong>。</li><li>获取到顶级域名服务器 IP 地址，它将<strong>向该域名对应顶级域名服务器发起请求</strong>。</li><li>顶级域名服务器将向本地 DNS 服务器<strong>提供下一级域名服务器的 IP 地址</strong>。</li><li>过程将一直继续，<strong>直到本地 DNS 服务器找到该域名对应的 IP 地址</strong>。一旦本地 DNS 服务器<strong>找到了</strong>该域名对应的 IP 地址，它将把该<strong>IP 地址缓存</strong>起来，并将其返回给客户端。</li><li>如果都没找到，则解析失败。通常是由于域名不存在、DNS 服务器出现故障、网络连接问题等原因导致的。</li></ol><h3 id="介绍三次握手-为什么需要三次" tabindex="-1">介绍三次握手，为什么需要三次 <a class="header-anchor" href="#介绍三次握手-为什么需要三次" aria-label="Permalink to &quot;介绍三次握手，为什么需要三次&quot;">​</a></h3><p>TCP 协议使用三次握手（Three-Way Handshake）建立一个可靠的连接，确保通信双方的数据传输是可靠的。</p><p>三次握手的过程如下：</p><ol><li><strong>客户端向服务器发送一个 SYN 包</strong>，请求建立连接。该包包含一个随机序列号（ISN），用于标识该连接。<strong>客户端进入SYN_SENT 状态</strong> ，等待服务器的响应。</li><li><strong>服务器接收到 SYN 包后</strong>，向客户端<strong>发送一个 SYN+ACK 包</strong>，表示收到请求并确认建立连接。该包也包含一个随机序列号（ISN），用于标识该连接。<strong>服务器进入 SYN_RCVD 状态</strong>。</li><li><strong>客户端接收到 SYN+ACK 包后</strong>，向服务器<strong>发送一个 ACK 包</strong>，表示确认建立连接。该包也包含一个随机序列号（ISN），用于标识该连接。<strong>客户端进入 ESTABLISHED 状态</strong>，<strong>服务器在接收到该 ACK 包后，也进入 ESTABLISHED 状态</strong>。从此，两个端点可以开始进行数据传输。</li></ol><p>解释一下为什么需要三次握手。</p><p>第一次握手：由<strong>客户端</strong>发送 SYN 包，<strong>请求连接</strong>。</p><p>此时，客户端并不知道服务器是否准备好建立连接，服务器也不知道客户端是否真的要建立连接。因此，<strong>第一次握手的目的是让服务器知道客户端的存在，并打开接收数据的端口。</strong></p><p>第二次握手：<strong>服务器</strong>发送 SYN+ACK 包，<strong>表示确认请求，并告诉客户端可以向该端口发送数据</strong>。</p><p>此时，服务器知道了客户端的请求，并打开了一个新的端口等待数据传输。</p><p>第三次握手：<strong>客户端</strong>发送 ACK 包，<strong>确认可以向服务器发送数据</strong>。</p><p>此时，客户端知道了服务器的存在，并且知道了服务器可以接收数据的端口。这样，双方都知道了对方的存在，并确认了可以进行数据传输，从而建立了可靠的连接。</p><p>总之，三次握手的目的是为了确保通信双方都能够收到对方的请求和确认，并且都准备好进行数据传输。它可以避免因为网络延迟或其他原因导致连接失败或不可靠，从而确保通信的可靠性。</p><p>补充：<code>SYN、ISN、ACK</code></p><p><code>SYN（Synchronize Sequence Number）</code>：同步序列号。TCP 通信的建立需要三次握手，SYN 字段用于在建立连接时发起请求。</p><p><code>ISN（Initial Sequence Number）</code>：初始序列号。ISN 是由随机数生成的一个 32 位数值，用于标识 TCP 报文段中第一个字节的序列号，从而实现有序传输。</p><p><code>ACK（Acknowledgment Number）</code>：确认序列号。ACK 用于确认接收方已经成功接收到序列号为 ISN 的报文段，并且告诉发送方下一个期望收到的报文段的序列号。</p><h3 id="介绍四次挥手-为什么需要四次" tabindex="-1">介绍四次挥手，为什么需要四次 <a class="header-anchor" href="#介绍四次挥手-为什么需要四次" aria-label="Permalink to &quot;介绍四次挥手，为什么需要四次&quot;">​</a></h3><p>TCP 协议使用四次挥手（Four-Way Handshake）来终止一个 TCP 连接。</p><p>四次挥手的过程如下：</p><ol><li><strong>客户端</strong>向服务器<strong>发送一个 FIN 包</strong>，请求关闭连接。<strong>客户端进入 FIN_WAIT_1 状态</strong>。</li><li><strong>服务器</strong>接<strong>收到 FIN</strong> 包后，<strong>向客户端发送一个 ACK包</strong>，表示确认关闭连接。<strong>服务器进入 CLOSE_WAIT 状态</strong>。</li><li><strong>服务器</strong>向客户端<strong>发送一个 FIN 包</strong>，请求关闭连接。<strong>服务器进入 LAST_ACK 状态</strong>。</li><li><strong>客户端</strong>接<strong>收到 FIN 包后</strong>，向服务器<strong>发送一个 ACK 包</strong>，表示确认关闭连接。<strong>客户端进入 TIME_WAIT 状态</strong>，等待 2 个 MSL（Maximum Segment Lifetime）时间，确保服务器已经收到了最后一个 ACK 包。</li></ol><p>解释一下为什么需要四次挥手。</p><p>首先，由于 TCP 协议的全双工特性。在 TCP 连接建立后，通信双方都可以向对方发送数据，并接收对方发送的数据。当其中一方要关闭连接时，它<strong>不能只单方面地终止连接</strong>，因为另一方仍然可能在发送数据。因此，需要四次挥手来确保两端都知道对方已经关闭连接。</p><p>第一次挥手：由<strong>客户端发送 FIN 包</strong>，请求关闭连接。此时，客户端没有数据要发送给服务器了，并告诉服务器可以关闭连接了。</p><p>第二次挥手：由<strong>服务器</strong>向客户端<strong>发送一个 ACK 包</strong>，<strong>确认收到了客户端的 FIN 包</strong>，并告诉客户端可以关闭连接了。但是，服务器仍然可以向客户端发送数据，因此<strong>服务器进入 CLOSE_WAIT 状态</strong>。</p><p>第三次挥手：服务器数据发送完成后，由<strong>服务器</strong>向客户端<strong>发送 FIN 包</strong>，告诉客户端可以关闭连接了。此时，<strong>服务器进入 LAST_ACK 状态</strong>，等待客户端的确认。</p><p>第四次挥手：由<strong>客户端</strong>向服务器<strong>发送一个 ACK 包</strong>，<strong>确认收到了服务器的 FIN 包</strong>，并告诉服务器可以关闭连接了。客户端进入 TIME_WAIT 状态，<strong>等待 2 个 MSL 时间</strong>，确保服务器已经收到了最后一个 ACK 包。</p><p>这个等待时间是为了确保在网络传输过程中可能出现的延迟 ACK 包能够被接收，从而确保连接被完全终止。</p><p>总之，四次挥手的目的是为了确保通信双方都知道对方已经关闭连接，并且在关闭连接前完成了所有数据传输。它可以避免数据丢失或不完整，从而确保连接的可靠性。</p><p>补充：<code>FIN、MSL</code></p><p><code>FIN（Finish）</code>:是TCP协议用来结束一次连接的标志，通常由客户端或服务器端发起，用于向对方发出结束连接的请求。</p><p><code>MSL（Maximum Segment Lifetime）</code>：网络中数据包在网络上可以存活的最长时间。</p><p>补充：等待 2 个 MSL 原因</p><p>当客户端发送最后一个ACK报文段后，可能还有<strong>一些数据包在互联网中滞留</strong>，这些数据包可能因为各种原因，没有到达对端，从而<strong>导致对端没有接收到客户端的ACK，会触发对端的超时重传机制，从而导致连接无法释放</strong>。</p><p>为了避免这种情况发生，<strong>TCP 协议中规定，等待 2 倍的最大报文段生存时间(MSL)，可以确保互联网中的所有数据包都被丢弃</strong>，从而保证连接可以安全地释放。</p><h3 id="计算机网络五层模型" tabindex="-1">计算机网络五层模型 <a class="header-anchor" href="#计算机网络五层模型" aria-label="Permalink to &quot;计算机网络五层模型&quot;">​</a></h3><p>计算机网络五层模型是指将网络通信分为五个层次，<strong>从下到上</strong>分别是<strong>物理层、数据链路层、网络层、传输层和应用层</strong>。该模型是TCP/IP协议族的基础，其各层的功能如下：</p><p>物理层（<code>Physical Layer</code>）：负责数据在<strong>物理媒介中的传输</strong>，如电缆、光纤等，主要涉及传输的物理特性，如电压、电流、频率等。</p><p>数据链路层（<code>Data Link Layer</code>）：<strong>将物理层传输的比特流组成帧，并进行传输错误检测和纠正</strong>，如MAC地址的识别、流量控制等，确保数据的正确性和完整性。</p><p>网络层（<code>Network Layer</code>）：负责<strong>数据在网络中的传输和路由选择</strong>，如IP协议，实现数据包的传输和地址的分配等功能。</p><p>传输层（<code>Transport Layer</code>）：负责数据在<strong>端到端之间的传输和可靠性控制</strong>，如TCP、UDP协议，提供数据的分段、传输确认等功能。</p><p>应用层（<code>Application Layer</code>）：<strong>为用户提供服务</strong>，包括文件传输、电子邮件、远程登录等，实现不同应用程序之间的交互通信。</p><h3 id="http-缓存机制-常见的缓存策略" tabindex="-1">http 缓存机制，常见的缓存策略 <a class="header-anchor" href="#http-缓存机制-常见的缓存策略" aria-label="Permalink to &quot;http 缓存机制，常见的缓存策略&quot;">​</a></h3><p>HTTP缓存机制是一种提高网络性能和减少带宽使用的技术。</p><p>它通过缓存Web服务器的响应，并在下一次请求相同URL时返回缓存的响应，从而避免不必要的网络请求。</p><p>常见的HTTP缓存策略包括<strong>强制缓存</strong>和<strong>协商缓存</strong>。</p><p><strong>强制缓存</strong>：第一次请求资源时，服务器返回的HTTP响应头中带有缓存时间，浏览器根据时间判断是否从缓存中读取，若未过期，则直接从缓存中读取，否则重新请求资源。</p><ul><li><code>Expires</code>：在HTTP/1.0中，服务器通过在响应头中设置Expires字段，告诉客户端资源的过期时间，客户端可以在该时间之前从缓存中读取资源。缺点是当服务器时间与客户端时间不同步时，可能导致缓存不起作用。</li><li><code>Cache-Control</code>：在HTTP/1.1中，Cache-Control是最重要的缓存控制字段，它可以控制缓存的方式、过期时间、重新验证等。常见的Cache-Control字段包括max-age、no-cache、no-store、must-revalidate等。</li></ul><p><strong>协商缓存</strong>：在请求数据时，浏览器会先向服务器发送一个请求，服务器会比较请求的资源的ETag或Last-Modified是否发生改变，如果未发生改变，则返回304状态码，告诉浏览器直接使用缓存数据。</p><ul><li><code>ETag</code>：在每个响应头中，服务器会生成一个ETag值，客户端请求时会携带上次请求返回的ETag值，服务器可以通过比较这两个值来判断是否需要返回新的响应。ETag值通常是由服务器生成的一些资源信息的哈希值或版本号。</li><li><code>Last-Modified</code>：在每个响应头中，服务器会返回资源的最后修改时间，客户端可以通过If-Modified-Since字段将上次请求返回的时间戳发送给服务器，服务器可以根据时间戳判断是否需要返回新的响应。</li></ul><p>常见的缓存策略包括：</p><ul><li>缓存静态资源，如图片、CSS和JS等。</li><li>设置缓存头信息，如Expires和Cache-Control等。</li><li>使用协商缓存，如ETag和Last-Modified等。</li><li>使用CDN加速服务。</li><li>动态更新缓存数据，如利用ajax或WebSocket动态获取数据并更新缓存。</li><li>优化缓存策略，如选择合适的缓存时间、合理配置缓存机制等。</li></ul><h3 id="https-缓存机制" tabindex="-1">https 缓存机制 <a class="header-anchor" href="#https-缓存机制" aria-label="Permalink to &quot;https 缓存机制&quot;">​</a></h3><p>HTTPS缓存与HTTP缓存机制类似，但是由于HTTPS的安全性，所以其缓存机制比HTTP缓存机制要严格一些。</p><p>HTTPS缓存的主要区别是：</p><ol><li>HTTPS中使用的是加密传输，因此缓存的内容需要加密存储，避免信息泄露。</li><li>HTTPS中使用的证书具有一定的有效期，在证书有效期内浏览器可以缓存证书，避免重复验证证书的过程，提高访问速度。</li><li>HTTPS缓存中还涉及到安全相关的策略，如HSTS（Strict-Transport-Security）和HPKP（Public-Key-Pins），可以避免中间人攻击，提高安全性。</li></ol><p>常见的HTTPS缓存策略包括：</p><ol><li>强制缓存：与HTTP缓存一致，使用Expires和Cache-Control两个头信息控制缓存时间。</li><li>协商缓存：与HTTP缓存一致，使用Last-Modified和ETag头信息进行缓存协商。</li><li>HSTS：HTTP Strict Transport Security（HSTS）可以强制客户端只使用HTTPS进行访问，在一定程度上避免了中间人攻击。</li><li>HPKP：HTTP Public Key Pinning（HPKP）可以指定服务器使用的公钥，避免了中间人攻击和证书欺骗。</li></ol><h3 id="http-和-https-区别" tabindex="-1">http 和 https 区别 <a class="header-anchor" href="#http-和-https-区别" aria-label="Permalink to &quot;http 和 https 区别&quot;">​</a></h3><p>HTTP（Hypertext Transfer Protocol）和HTTPS（Hypertext Transfer Protocol Secure）是两种常见的网络协议，它们之间的主要区别在于安全性和加密。</p><ol><li><strong>安全性</strong>：HTTP协议是明文传输，数据不加密，缺乏安全性。HTTPS协议通过SSL/TLS协议对数据进行加密传输，防止数据被窃听和篡改，提高了数据的安全性。</li><li><strong>端口</strong>：HTTP协议使用80端口，而HTTPS协议则使用443端口。</li><li><strong>证书</strong>：HTTPS协议需要使用数字证书，用于验证网站的身份，防止恶意伪造网站。</li><li><strong>性能</strong>：由于HTTPS协议需要进行加密和解密操作，因此比HTTP协议性能稍差。</li></ol><h3 id="跨域是什么-给出解决方案" tabindex="-1">跨域是什么，给出解决方案 <a class="header-anchor" href="#跨域是什么-给出解决方案" aria-label="Permalink to &quot;跨域是什么，给出解决方案&quot;">​</a></h3><p>跨域是指在浏览器的同源策略下，访问另一个域名下的资源。</p><p><strong>跨域问题</strong>：由于同源的限制，出现无法访问的情况。</p><p><strong>同源策略</strong>：浏览器只允许当前网页向同一域名或子域名下发起请求，而不允许向其他域名下发起请求。</p><p>跨域问题会在以下情况出现：</p><ul><li><strong>不同域名</strong>：当在网页中发起一个请求时，如果该请求的域名和当前网页所在的域名不一致，就会产生跨域问题。</li><li><strong>子域名之间</strong>：即使是在同一个主域名下，不同的子域名之间也被视为不同的域名，会出现跨域问题。</li><li><strong>端口不同</strong>：不同的端口号也被视为不同的域名，会产生跨域问题。</li><li><strong>协议不同</strong>：当一个网页通过 HTTPS 协议请求 HTTP 协议的资源，或者反之，也会出现跨域问题。</li></ul><blockquote><p>跨域问题只存在于浏览器端，而不是服务器端。</p></blockquote><p>解决方案</p><ol><li><code>JSONP</code>：利用 <code>&lt;script&gt;</code> 标签的跨域特性，通过动态创建 <code>&lt;script&gt;</code> 标签来加载数据，并指定回调函数，从而实现跨域请求。缺点是只能实现 GET 请求，且存在安全风险，容易受到 XSS 攻击。</li><li><code>CORS</code>：跨域资源共享（Cross-Origin Resource Sharing）， W3C 标准，让服务器支持跨域请求。浏览器会在请求头中加上 <strong>Origin 字段</strong>，服务器根据这个字段来判断是否允许跨域请求，并在响应头中加上 <code>Access-Control-Allow-Origin、Access-Control-Allow-Headers</code> 字段分别指定允许的来源和允许哪些自定义请求头。缺点是在老旧<strong>浏览器兼容性</strong>问题，<strong>头信息不易管理</strong>。</li><li><code>代理</code>：通过服务器来转发请求和响应，绕过浏览器的同源策略限制。例如，在本地开发环境下，可以使用代理服务器转发请求到后端接口，从而实现跨域请求。缺点是会<strong>消耗更多的服务器资源</strong>和<strong>存在安全问题</strong>（代理服务器可能会泄露信息）。</li></ol><h3 id="xss和csrf" tabindex="-1">XSS和CSRF <a class="header-anchor" href="#xss和csrf" aria-label="Permalink to &quot;XSS和CSRF&quot;">​</a></h3><p><code>XSS</code>：<code>Cross-Site Scripting</code>,<code>跨域脚本攻击</code>，一般指的是有人往网站注入恶意脚本，使之在网页中运行，从而盗取cookie等信息可达到以下攻击：</p><ul><li>获取页面数据，如DOM、cookie、LocalStorage</li><li>DOS攻击，发送合理请求，占用服务器资源，使用户无法正常访问服务器</li><li>破坏页面结构</li><li>流量劫持（将链接指向某网站）</li></ul><p><strong>防御</strong>：对存储到后端的数据进行转义，禁止<code>script</code>这种类似的脚本数据存储</p><p><code>CSRF</code>：<code>Cross-Site Request Forgery</code>，跨站请求伪造 ，攻击者诱导用户进入一个第三方网站，然后在第三方网站发送请求，同时会带走用户现有的登录状态，从而冒充用户执行请求操作</p><p>本质是利用Cookie会在同源请求中携带发送给服务器的特点，以此来实现用户的冒充</p><p><strong>防御</strong></p><p>**同源检测：**服务端对请求头中的origin和referer进行检测，但是这两个字段也可以伪造</p><p>**使用Token：**Token与Cookie不同的就是，Token是可以用户选择性发送，Cookie是主动携带</p><p>**Samesite：**设置Cookie的Samesite为严格模式，限制不被第三方网站使用Samesite</p><h3 id="跨域时携带-cookie-如何做" tabindex="-1">跨域时携带 cookie 如何做 <a class="header-anchor" href="#跨域时携带-cookie-如何做" aria-label="Permalink to &quot;跨域时携带 cookie 如何做&quot;">​</a></h3><p>在跨域请求中携带 Cookie 是一个常见的需求，但由于浏览器的同源策略限制，不同域名下的 JavaScript 脚本无法直接访问另一个域名下的 Cookie。</p><p>以下是一些解决方案：</p><ol><li>CORS：使用 CORS（Cross-Origin Resource Sharing，跨域资源共享）机制来允许浏览器发送跨域请求，并且在服务端设置响应头来控制请求的访问权限。通过在服务端设置 <code>Access-Control-Allow-Credentials: true</code>，表示允许跨域请求携带 Cookie。</li><li>反向代理：使用反向代理服务器将请求代理到同一域名下，这样就可以携带 Cookie 了。例如，将所有跨域请求都代理到同一域名下的 <code>/api</code> 路径下。</li><li>前端设置 <code>withCredentials</code> 属性：前端设置 <code>withCredentials</code> 属性为 <code>true</code>，表示允许跨域请求携带 Cookie。但需要注意，这种方式需要服务端设置 <code>Access-Control-Allow-Origin</code> 为具体的域名，而不能设置为通配符 <code>*</code>。</li></ol><p>在携带 Cookie 的跨域请求中，还需要同时设置 <code>Access-Control-Allow-Origin</code> 和 <code>Access-Control-Allow-Credentials</code> 两个响应头，才能让浏览器正常处理跨域请求，并且返回 Cookie。</p><blockquote><p>注意：服务端返回的 Cookie 存在敏感信息，需要进行加密处理，并且只在 HTTPS 安全协议下传输，以避免信息泄露。</p></blockquote><h2 id="比较篇" tabindex="-1">比较篇 <a class="header-anchor" href="#比较篇" aria-label="Permalink to &quot;比较篇&quot;">​</a></h2><h3 id="get-和-post-区别" tabindex="-1">get 和 post 区别 <a class="header-anchor" href="#get-和-post-区别" aria-label="Permalink to &quot;get 和 post 区别&quot;">​</a></h3><p><strong>幂等：</strong> get 用于获取资源，不管调用多少次接口，结果都不会改变，所以是幂等的。post 会对资源本身产生影响，每次调用都会有新的资源产生，因此不满足幂等性</p><p><strong>应用场景：</strong> get 获取资源，post 用来提交资源</p><p><strong>缓存：</strong> get 一般会做缓存，post 不做缓存</p><p><strong>传参：</strong> get 只能传字符串拼接，post 可以请求体、字符串拼接</p><p><strong>传参长度：</strong> get 传参是 url 拼接，所以会因为浏览器限制 url 长度，而导致传参长度被限制</p><p><strong>参数类型：</strong> get 只允许传 ASCII 字符，post 支持文件、图片、表单、JSON 等</p><p><strong>安全性：</strong> 都不安全</p><blockquote><p>幂等：一次请求和多次请求的效果相同</p></blockquote><h3 id="http1-0-与-http1-1-的区别" tabindex="-1">HTTP1.0 与 HTTP1.1 的区别 <a class="header-anchor" href="#http1-0-与-http1-1-的区别" aria-label="Permalink to &quot;HTTP1.0 与 HTTP1.1 的区别&quot;">​</a></h3><ul><li><strong>连接：</strong> 1.0 非持久连接，1.1 持久连接，多个 http 请求可复用同一个 TCP 连接</li><li><strong>资源请求：</strong> 1.1 引入了 range 头，允许只请求资源的某个部分</li><li><strong>缓存：</strong> 1.0 使用<code>Expire、If-Modified-Since</code>来当做缓存头；1.1 使用<code>Etag、If-None-Match、If-Match</code></li><li><strong>Host：</strong> 1.1 新赠 Host 请求头，用来表示请求服务器的域名</li><li><strong>方法：</strong> 1.1 新增<code>PUT、HEAD、OPTIONS</code>等方法</li></ul><h3 id="http1-1-与-http2-0-的区别" tabindex="-1">HTTP1.1 与 HTTP2.0 的区别 <a class="header-anchor" href="#http1-1-与-http2-0-的区别" aria-label="Permalink to &quot;HTTP1.1 与 HTTP2.0 的区别&quot;">​</a></h3><ul><li><strong>二进制协议：</strong> 2.0 头信息和数据体都是二进制，统称为“帧”，是<strong>多路复用</strong>的基础</li><li><strong>多路复用：</strong> 2.0 复用 TCP 连接，同一个 TCP 连接中，可发多个请求或回应，这就解决了<strong>队头阻塞</strong>问题</li><li><strong>数据流：</strong> 2.0 将每个请求或回应的所有数据包统称为一个数据流，每一个数据流都有独一无二的编号 ID，用于数据传输时的区分</li><li><strong>头信息压缩：</strong> 2.0 维护一张<strong>头信息表</strong>，所有头字段信息都会记录在这张表里，发送时只需要发送对应的 key 就行，大大节省空间。为啥这么做呢？你想想，如果多个 header 内容都一样，照样发送的话，是不是很浪费空间</li><li><strong>服务器推送：</strong> 2.0 可提前向客户端推送静态资源，这样客户端页面的加载延迟就会大大减少</li></ul><h3 id="tcp-和-udp-websocket-用哪一种" tabindex="-1">TCP 和 UDP ，Websocket 用哪一种 <a class="header-anchor" href="#tcp-和-udp-websocket-用哪一种" aria-label="Permalink to &quot;TCP 和 UDP ，Websocket 用哪一种&quot;">​</a></h3><p>TCP和UDP是两种网络传输协议，它们在网络传输中有着不同的应用场景和特点。</p><p><code>TCP</code>（Transmission Control Protocol，传输控制协议）是一种面向连接的、可靠的、基于字节流的传输协议。</p><p>TCP协议在传输数据之前，需要先建立一个连接，然后才能进行数据的传输。在数据传输过程中，TCP会对数据进行拆分、排序、确认等操作，确保数据的可靠性和完整性，从而保证数据的正确传输。</p><p><code>UDP</code>（User Datagram Protocol，用户数据报协议）是一种无连接的、不可靠的、基于数据包的传输协议。</p><p>UDP协议直接传输数据包。在传输过程中，UDP不会对数据进行校验，因此数据的传输可能存在丢包和重复等问题。</p><p>它们的<strong>主要区别</strong>在于：</p><ol><li><strong>可靠性</strong>：TCP 是一种面向连接的协议，提供可靠的数据传输；而 UDP 是一种面向无连接的协议，不保证数据传输的可靠性。</li><li><strong>速度</strong>：由于 TCP 在传输数据时要进行各种确认和校验，因此会有一定的延迟；而 UDP 不需要进行这些操作，因此速度更快。</li><li><strong>传输单位</strong>：TCP 是一种面向流的协议，传输的单位是数据流；而 UDP 是一种面向报文的协议，传输的单位是数据报文。</li></ol><p>TCP 适用于对可靠性要求比较高的应用，如文件传输、电子邮件等；</p><p>UDP 适用于对实时性要求比较高的应用，如音视频传输、在线游戏等。</p><p>Websocket是一种基于TCP协议的全双工通信协议，可以在客户端和服务器之间建立持久连接，实现实时通信。因为Websocket基于TCP协议，可以保证数据的可靠性和完整性，同时又具有实时性。虽然 UDP 协议在实时性上更有优势，但是在可靠性和数据传输完整性方面不如 TCP 协议，因此不适用于 Websocket 通信。</p><h3 id="数据报文和数据流" tabindex="-1">数据报文和数据流 <a class="header-anchor" href="#数据报文和数据流" aria-label="Permalink to &quot;数据报文和数据流&quot;">​</a></h3><p><strong>数据报文</strong>（Datagram）是指按照一定格式打包好的单个数据包，每个数据报文都包含了源地址、目的地址、长度等信息。数据报文传输时不保证有序到达，也不保证一定到达，丢包情况较为常见。UDP协议就是基于数据报文传输的，UDP传输方式简单，速度快，但不保证数据可靠性和有序性，适用于一些要求实时性高但可靠性要求不高的应用，比如视频、语音等。</p><p><strong>数据流</strong>（Stream）则是指将数据分成若干个大小不等的块（也可以是按字节分割），通过序列号和确认应答机制来保证数据可靠到达并保持有序。TCP协议就是基于数据流传输的，TCP协议提供了数据可靠性和有序性保证，适用于一些要求数据传输可靠性和稳定性的应用，比如网页、文件传输等。</p><h2 id="收集篇" tabindex="-1">收集篇 <a class="header-anchor" href="#收集篇" aria-label="Permalink to &quot;收集篇&quot;">​</a></h2><h3 id="常见http请求头" tabindex="-1">常见HTTP请求头 <a class="header-anchor" href="#常见http请求头" aria-label="Permalink to &quot;常见HTTP请求头&quot;">​</a></h3><p><strong>请求头</strong></p><p><strong>Accept：</strong> 浏览器能够处理的内容类型</p><p><strong>Accept-Charset：</strong> 浏览器能够显示的字符集</p><p><strong>Accept-Encoding：</strong> 浏览器能够处理的压缩编码</p><p><strong>Accept-Language：</strong> 浏览器当前设置的语言</p><p><strong>Connection：</strong> 浏览器与服务区之间的连接类型</p><p><strong>Cookie：</strong> 当前页面设置的 Cookie</p><p><strong>Host：</strong> 发送请求的域名</p><p><strong>Referer：</strong> 发送请求的页面 URL</p><p><strong>User-Agent：</strong> 浏览器的用户代理字符串</p><p><strong>响应头</strong></p><p><strong>Date：</strong> 消息发送的时间</p><p><strong>server：</strong> 服务器名称</p><p><strong>Connection：</strong> 浏览器与服务器之间的连接类型</p><p><strong>Cache-Control：</strong> HTTP 强缓存</p><p><strong>Content-Type：</strong> 数据类型</p><h3 id="http-only-有什么用" tabindex="-1">http-only 有什么用 <a class="header-anchor" href="#http-only-有什么用" aria-label="Permalink to &quot;http-only 有什么用&quot;">​</a></h3><p>HTTP-only是一种cookie标志，它指示浏览器只能通过HTTP或HTTPS协议来访问cookie，不能通过JavaScript或其他脚本访问。主要是为了保护用户的cookie，防止被一些恶意脚本窃取和利用。</p><h3 id="tcp-在连接时会出现拥塞和粘包的问题-要怎么解决粘包的问题" tabindex="-1">TCP 在连接时会出现拥塞和粘包的问题，要怎么解决粘包的问题 <a class="header-anchor" href="#tcp-在连接时会出现拥塞和粘包的问题-要怎么解决粘包的问题" aria-label="Permalink to &quot;TCP 在连接时会出现拥塞和粘包的问题，要怎么解决粘包的问题&quot;">​</a></h3><p>TCP在传输数据时，为了提高效率，往往会将多个小数据包合并成一个大的数据包进行传输，这就是TCP粘包的问题。</p><p>常见粘包问题解决方案如下：</p><ol><li>包头+包体：在发送数据时，在数据包的头部加上一个固定长度的数据，表示这个数据包中的数据长度，接收端可以根据这个长度来划分每个数据包，从而解决粘包的问题。</li><li>定长包：在发送数据时，将每个数据包的长度固定为一个常量值，这样接收端就可以根据这个常量值来划分每个数据包，从而解决粘包的问题。</li><li>特殊字符分隔：在发送数据时，在每个数据包的结尾加上一个特殊字符，比如换行符，接收端可以根据这个特殊字符来划分每个数据包，从而解决粘包的问题。</li><li>在TCP层面设置 Nagle 算法来减少小包的发送，从而降低粘包的发生概率。</li></ol><h3 id="小程序的-websocket-和-web-端的-websocket-有什么不同" tabindex="-1">小程序的 webSocket 和 web 端的 webSocket 有什么不同？ <a class="header-anchor" href="#小程序的-websocket-和-web-端的-websocket-有什么不同" aria-label="Permalink to &quot;小程序的 webSocket 和 web 端的 webSocket 有什么不同？&quot;">​</a></h3><p>小程序的 WebSocket 和 Web 端的 WebSocket 的区别主要在于它们对 API 的支持程度不同。小程序的 WebSocket API 是基于标准的 WebSocket 协议实现的，但是受到小程序运行环境的限制，它并不支持所有 WebSocket API。例如，小程序不支持发送和接收二进制数据，也不支持设置 HTTP 头等高级操作。</p><p>另外，小程序的 WebSocket API 与 Web 端的 WebSocket API 的使用方式也略有不同。小程序的 WebSocket API 需要通过 wx.connectSocket() 进行初始化，而 Web 端的 WebSocket API 则是通过创建 WebSocket 对象来初始化的。小程序的 WebSocket API 也提供了一些专门针对小程序开发的接口，例如 wx.onSocketMessage() 和 wx.sendSocketMessage() 等。</p><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><p><a href="https://mp.weixin.qq.com/s?__biz=Mzg2NjY2NTcyNg==&amp;mid=2247487779&amp;idx=1&amp;sn=824a5c22588df339f07ea0ee97bf8644&amp;chksm=ce4604b2f9318da4a6554626c8ebb7232f16d69f5d98a7681bed4d59daf61381fcf9997f22cc&amp;scene=178&amp;cur_album_id=2003210846117642242#rd" target="_blank" rel="noreferrer">面试中遇到频率最高的 23 道 HTTP 面试题</a></p>',176),a=[s];function i(l,g,p,c,d,h){return r(),t("div",null,a)}const S=o(n,[["render",i]]);export{P as __pageData,S as default};
