FROM python:3.9.6
ENV PYTHONUNBUFFERED 1
WORKDIR /api
EXPOSE 80
COPY requirements.txt ./
RUN pip install -r requirements.txt
ADD abi ./abi
ADD api ./api
ADD purchase_indexer ./purchase_indexer
ADD price_indexer ./price_indexer
ADD mint_controller ./mint_controller
ADD scaley_valley ./scaley_valley
ADD valleys_indexer ./valleys_indexer
ADD gnosis_bridge ./gnosis_bridge
ADD entrypoint_api.sh ./entrypoint_api.sh
ADD entrypoint_purchase_indexer.sh ./entrypoint_purchase_indexer.sh
ADD entrypoint_price_indexer.sh ./entrypoint_price_indexer.sh
ADD entrypoint_mint_controller.sh ./entrypoint_mint_controller.sh
ADD entrypoint_valleys_indexer.sh ./entrypoint_valleys_indexer.sh
ADD entrypoint_gnosis_bridge.sh ./entrypoint_gnosis_bridge.sh
ADD manage.py ./manage.py
