<h2>G729a or b?</h2>

In terms of representation in the SDP payload.

&#x25cf; G729, G729a (and G729c):

1. number in m= line: 18
2. a=rtpmap:18 G729/8000
3. a=fmtp:18 annexb=no (or not present)

&#x25cf; G729b

1. number in m= line: 18
2. a=rtpmap:18 G729/8000
3. a=fmtp:18 annexb=yes

&#x25cf; G729d

1. number in m= line: n (dynamic)
2. a=rtpmap:n G729D/8000
3. a=fmtp:n annexb=no (or not present)

&#x25cf; G729e

1. number in m= line: n (dynamic)
2. a=rtpmap:n G729E/8000
3. a=fmtp:n annexb=no (or not present)

&#x25cf; G729f

1. number in m= line: n (dynamic)
2. a=rtpmap:n G729D/8000
3. a=fmtp:n annexb=yes

&#x25cf;  G729g

1. number in m= line: n (dynamic)
2. a=rtpmap:n G729E/8000
3. a=fmtp:n annexb=yes

Ref: 

http://stackoverflow.com/questions/24136765/ambiguity-in-g729-annexes
https://en.wikipedia.org/wiki/G.729
