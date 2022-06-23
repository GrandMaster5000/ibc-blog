package keeper_test

import (
	"context"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/tolik22869/hackatom/testutil/keeper"
	"github.com/tolik22869/hackatom/x/hackatom/keeper"
	"github.com/tolik22869/hackatom/x/hackatom/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.HackatomKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
