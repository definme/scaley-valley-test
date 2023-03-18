from rest_framework.fields import SerializerMethodField
from rest_framework.serializers import ModelSerializer
from .models import Resource, Chain, Kind, Valley, Character


class ChainSerializer(ModelSerializer):
    class Meta:
        fields = ('name', 'chain_id', 'rpc_url', 'explorer', 'image_uri')
        model = Chain


class ValleySerializer(ModelSerializer):
    chain_name = ChainSerializer(many=False, read_only=True)

    class Meta:
        fields = ('name', 'image_uri', 'description', 'chain', 'chain_name')
        model = Valley

    def get_chain_name(self, valley: Valley):
        return valley.chain.name


class ResourceSerializer(ModelSerializer):
    chain = ChainSerializer(many=False, read_only=True)

    class Meta:
        fields = (
            'name', 'price', 'chain', 'resource_token_address', 'trade_contract_address', 'resource_token_name', 'image_uri')
        model = Resource


class KindSerializer(ModelSerializer):
    payment_resource = ResourceSerializer(many=False, read_only=True)

    class Meta:
        fields = ('name', 'contract_kind_id', 'image_uri', 'payment_resource')
        model = Kind


class CharacterSerializer(ModelSerializer):
    valley = ValleySerializer(many=False, read_only=True)
    kind = KindSerializer(many=False, read_only=True)

    class Meta:
        fields = (
            'kind', 'contract_token_id', 'owner', 'price', 'level', 'agility', 'intellect',
            'valley', 'creation_time', 'last_update')
        model = Character
