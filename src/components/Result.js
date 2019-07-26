import React, { Component } from "react";
import {
    SelectedFilters,
    ReactiveList,
    ResultCard
} from "@appbaseio/reactivesearch";

class Result extends Component {
    render() {
        return (
            <div className="result-container">
                <SelectedFilters>here</SelectedFilters>
                <ReactiveList
					componentId="SearchResult"
					dataField="original_title"
					from={0}
					size={4}
					className="result-list-container"
					pagination
					react={{
                        and: ["BookSensor", "dateFilter"]
                    }}
                    showLoader = {false}
					render={({ data }) => (
						<ReactiveList.ResultCardsWrapper>
							{data.map(item => (
								<ResultCard key={item.id}>
									<ResultCard.Image src={item.image} />
									<ResultCard.Title>
										<div
											className="book-title"
											dangerouslySetInnerHTML={{
												__html: item.original_title,
											}}
										/>
									</ResultCard.Title>

									<ResultCard.Description>
										<div className="flex column justify-space-between">
											<div>
												<div>
													by{' '}
													<span className="authors-list">
														{item.authors}
													</span>
												</div>
												<div className="ratings-list flex align-center">
													<span className="stars">
														{Array(item.average_rating_rounded)
															.fill('x')
															.map((item, index) => (
																<i
																	className="fas fa-star"
																	key={index}
																/>
															)) // eslint-disable-line
														}
													</span>
													<span className="avg-rating">
														({item.average_rating} avg)
													</span>
												</div>
											</div>
											<span className="pub-year">
												Pub {item.original_publication_year}
											</span>
										</div>
									</ResultCard.Description>
								</ResultCard>
							))}
						</ReactiveList.ResultCardsWrapper>
					)}
				/>
            </div>
        );
    }
}

export default Result;
