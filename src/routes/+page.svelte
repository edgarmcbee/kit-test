<script lang="ts">
	import { companies } from '../stores/company.store';

	import type { PageData } from './$types';

	export let data: PageData;

	companies.set(data.companies);

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Home" />
</svelte:head>
<!-- using store -->
<!-- {#each $companies as company}
		{#if company.SaleStatus === 'live'}
			<p>
				{company.ShortName || company.CompanyName}
			</p>
		{/if}
	{/each} -->

<div class="support-requests">
	<div class="support-requests__content" style="align-items:center;">
		<div class="support-requests__header">
			<div />
		</div>
		{#if $companies?.length > 1}
			<table style="width:90vw">
				<thead>
					<th class="statusColumn" style="width:110px;max-width: 110px;">Company id</th>
				</thead>
				<tbody>
					{#each $companies as item}
						<tr>
							<td class="statusColumn">
								<div class="saleStatus sale-status-chips">
									{item.CompanyId}
								</div>
							</td>
							<td class="nameColumn">
								<a
									class="table-body-text name fit"
									style="width:300px;height:24.5px; cursor: pointer;"
									href={'https://google.com'}
								>
									{item?.CompanyName}
								</a>
								<p class="table-body-text">
									{item?.State}
								</p>
							</td>
							<td class="saleInfoColumn" />
							<td class="saleDayColumn">
								<p class="table-body-text">
									{item?.Email}
								</p>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		{/if}
	</div>
</div>

<style>
	.sale-status-chips {
		transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
		display: inline-flex;
		padding: 7px 12px;
		border-radius: 16px;
		align-items: center;
		cursor: default;
		min-height: 32px;
		height: 1px;
		position: relative;
		box-sizing: border-box;
		-webkit-tap-highlight-color: transparent;
		transform: translateZ(0);
		border: none;
		-webkit-appearance: none;
		-moz-appearance: none;
	}

	.saleStatus {
		width: 100px;
		justify-content: center;
	}

	.statusColumn {
		padding: 5px !important;
		width: 110px;
		overflow: hidden;
		white-space: nowrap;
	}

	.nameColumn {
		padding: 0 !important;
	}

	.saleDayColumn {
		padding-right: 0 !important;
		width: 90px;
		overflow: hidden;
		white-space: nowrap;
		text-align: center;
	}

	.support-requests {
		display: flex;
		flex-direction: column;
		flex: 1;
		padding: 0;
		box-shadow: 0 5px 15px rgb(0 0 0 / 6%), 0 15px 35px rgb(0 0 0 / 12%);
	}

	.support-requests__header {
		width: -webkit-fill-available;
		display: flex;
		justify-content: space-between;
		padding: 24px 24px 8px;
		margin-bottom: 0;
	}

	.support-requests__content {
		display: flex;
		flex: 1;
		flex-direction: column;
		height: auto;
		overflow-y: hidden;
		overflow-x: scroll;
		/* background: -webkit-linear-gradient(left, transparent, transparent, #000000ab); */
	}

	@media (max-width: 576px) {
		.support-requests__content {
			height: auto;
		}
	}

	p.table-body-text {
		font-size: 13px;
		font-weight: 400;
		color: #636363;
		text-transform: uppercase;
		/* width: max-content; */
		margin: 0;
	}
</style>
