package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	testkeeper "github.com/tolik22869/hackatom/testutil/keeper"
	"github.com/tolik22869/hackatom/x/hackatom/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.HackatomKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
