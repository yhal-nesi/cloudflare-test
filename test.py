from workers import Response
from urllib.parse import urlparse

async def on_fetch(request):
    base = "https://iam.nesi.org.nz/realms/public/device"
    statusCode = 301

    url = urlparse(request.url)

    destinationURL = f'{base}{url.path}{url.query}'
    print(destinationURL)

    return Response.redirect(destinationURL, statusCode)