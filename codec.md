G729a or b?

In terms of representation in the SDP payload.

    G729, G729a (and G729c):
        number in m= line: 18
        a=rtpmap:18 G729/8000
        a=fmtp:18 annexb=no (or not present)
    G729b
        number in m= line: 18
        a=rtpmap:18 G729/8000
        a=fmtp:18 annexb=yes
    G729d
        number in m= line: n (dynamic)
        a=rtpmap:n G729D/8000
        a=fmtp:n annexb=no (or not present)
    G729e
        number in m= line: n (dynamic)
        a=rtpmap:n G729E/8000
        a=fmtp:n annexb=no (or not present)
    G729f
        number in m= line: n (dynamic)
        a=rtpmap:n G729D/8000
        a=fmtp:n annexb=yes
    G729g
        number in m= line: n (dynamic)
        a=rtpmap:n G729E/8000
        a=fmtp:n annexb=yes

 

Ref: 

    http://stackoverflow.com/questions/24136765/ambiguity-in-g729-annexes
    https://en.wikipedia.org/wiki/G.729
