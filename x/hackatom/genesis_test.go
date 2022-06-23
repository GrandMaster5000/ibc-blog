package hackatom_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "github.com/tolik22869/hackatom/testutil/keeper"
	"github.com/tolik22869/hackatom/testutil/nullify"
	"github.com/tolik22869/hackatom/x/hackatom"
	"github.com/tolik22869/hackatom/x/hackatom/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.HackatomKeeper(t)
	hackatom.InitGenesis(ctx, *k, genesisState)
	got := hackatom.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
