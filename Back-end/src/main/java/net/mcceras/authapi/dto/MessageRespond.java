package net.mcceras.authapi.dto;

public class MessageRespond {
    private String message;

    public MessageRespond(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
