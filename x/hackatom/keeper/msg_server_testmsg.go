package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/tolik22869/hackatom/x/hackatom/types"
)

func (k msgServer) Testmsg(goCtx context.Context, msg *types.MsgTestmsg) (*types.MsgTestmsgResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgTestmsgResponse{}, nil
}
