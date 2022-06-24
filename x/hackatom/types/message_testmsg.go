package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgTestmsg = "testmsg"

var _ sdk.Msg = &MsgTestmsg{}

func NewMsgTestmsg(creator string, text string) *MsgTestmsg {
	return &MsgTestmsg{
		Creator: creator,
		Text:    text,
	}
}

func (msg *MsgTestmsg) Route() string {
	return RouterKey
}

func (msg *MsgTestmsg) Type() string {
	return TypeMsgTestmsg
}

func (msg *MsgTestmsg) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgTestmsg) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgTestmsg) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
