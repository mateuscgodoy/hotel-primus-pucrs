from rest_framework import serializers
from .models import Reservation, RoomInstance


class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = "__all__"

    def validate(self, data):
        # Check if the room is available for the given date range
        room = data["room"]
        date_in = data["date_in"]
        date_out = data["date_out"]

        conflicting_reservations = Reservation.objects.filter(
            room=room,
            date_out__gt=date_in,
            date_in__lt=date_out,
        )

        if conflicting_reservations.exists():
            raise serializers.ValidationError(
                "The room is not available for the selected dates."
            )

        return data
